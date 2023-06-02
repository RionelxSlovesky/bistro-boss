import Testimonials from "../Testimonials/Testimonials";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Featured from "./Featured/Featured";
import PopularMenu from "./PopularMenu/PopularMenu";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>

      <Banner></Banner>
      <Category></Category>
      <Featured></Featured>
      <PopularMenu></PopularMenu>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
