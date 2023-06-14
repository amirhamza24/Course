import UseTitle from "../../../Hooks/UseTitle";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Gallery from "../Gallery/Gallery";
import Scroll from "../Scroll/Scroll";


const Home = () => {

    UseTitle('Home');

    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Category></Category>
            <Gallery></Gallery>
            <Scroll></Scroll>
        </div>
    );
};

export default Home;