import { Outlet, useLocation } from "react-router-dom"
import Footer from "../../pages/Shared/Footer/Footer";
import Header from "../../pages/Shared/Header/Header";

const Main = () => {

    const location = useLocation();
    console.log(location);

    return (
        <div className="">
            <Header></Header>

            <Outlet></Outlet>

            <Footer></Footer>

        </div>
    );
};

export default Main;