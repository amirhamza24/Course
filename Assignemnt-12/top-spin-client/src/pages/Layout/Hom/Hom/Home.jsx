import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularClass from "../PopularClass/PopularClass";
import PopularInstructor from "../PopularInstructor/PopularInstructor";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>TopSpin | Home</title>
            </Helmet>

            <Banner></Banner>
            <PopularClass></PopularClass>
            <PopularInstructor></PopularInstructor>
            <Featured></Featured>
            <Category></Category>
        </div>
    );
};

export default Home;