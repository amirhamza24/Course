import { useContext } from "react"
import { AuthContext } from "../provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";


const useInstructor = () => {
    const { user, loading } = useContext(AuthContext);

    const token = localStorage.getItem('access-token');
    // const [axiosSecure] = useAxiosSecure();

    // console.log(token);

    const { data: isInstructor, isLoading: isInstructorLoading } = useQuery({
        queryKey: ['isInstructor', user?.email],
        enabled: !loading,

        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users/role/${user?.email}`, {
                headers: {
                    authorization: `bearer ${token}`
                }
            })
            return res.json();
        },
    })
    const roleInsTructor = isInstructor?.role;
    // console.log(classes);
    return [ roleInsTructor, isInstructorLoading ]
};

export default useInstructor;