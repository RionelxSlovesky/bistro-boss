import Testimonials from "../Testimonials/Testimonials";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Featured from "./Featured/Featured";
import PopularMenu from "./PopularMenu/PopularMenu";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Featured></Featured>
            <PopularMenu></PopularMenu>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;