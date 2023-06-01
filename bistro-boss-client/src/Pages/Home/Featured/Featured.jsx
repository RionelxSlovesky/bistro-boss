import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg"
import './Featured.css'


const Featured = () => {
    return (
        <div className="featured-item text-white py-20 px-16">
            <SectionTitle heading="Featured Item" subHeading="check it out"></SectionTitle>
            <div className="md:flex gap-10 justify-center items-center">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div>
                    <p>Aug 20, 2029</p>
                    <p className="uppercase">Where can I get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi iusto quae laboriosam eaque, tenetur sunt dignissimos quo doloribus dolorum rem ad nostrum expedita a obcaecati dolores corrupti, repellendus mollitia eligendi voluptas temporibus amet natus excepturi dolor! Rem, eligendi ex? Tempora porro nostrum consectetur atque earum dignissimos impedit recusandae animi soluta!</p>
                    <button className="btn btn-outline border-0 border-b-2
                    text-white mt-4">Order Now!</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;