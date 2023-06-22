import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../../provider/AuthProvider";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../../Shared/SectionTitle/SectionTitle";

const InstClass = () => {
    const { user } = useContext(AuthContext);
    const [myClasses, setMyClasses] = useState([]);

    // const user = { email: "sakib1@gmail.com"}

    // useEffect(() => {
    //     fetch(`https://top-spin-server.vercel.app/addClass/instructor/${user?.email}`)
    //         .then((res) => res.json())
    //         .then((data) => setMyClasses(data));
    // }, []);

    useEffect( () => {
        const instructorClass = async () => {
            await axios.get(`https://top-spin-server.vercel.app/addClass/instructor/${user?.email}`)
            .then(res => setMyClasses(res.data))
        }
        instructorClass();
    }, [user?.email])


    return (
        <div className="w-full">

            <Helmet>
                <title>TopSpin | My Classes</title>
            </Helmet>

            <SectionTitle
                subHeading="My Classes"
                heading="Classes"
            ></SectionTitle>

            <h3>Instructor Class here: {myClasses?.length}</h3>

            <table className="table table-zebra">
                {/* head */}
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Image</th>
                        <th>Price</th>
                        <th>{`Status`}</th>
                        <th>Action</th>
                        <th>Details</th>
                    </tr>
                </thead>

                <tbody>
                    {/* row 1 */}

                    {
                        myClasses.map((myClass, index) => <tr
                        key={myClass._id}>
                            <th>{index+1}</th>
                            <td><img className="w-12 h-12 rounded-lg" src={myClass.imageURL} alt="" /></td>
                            <td>${myClass?.price}</td>
                            <td>{myClass?.status}</td>
                            <td>
                                <button className="btn btn-outline btn-primary btn-sm">Update</button>
                            </td>
                            <td>Available Seats: {myClass?.seat}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default InstClass;
