import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import { Link } from "react-router-dom";

const MenuCategory = ({ title, subHeading, heading, items }) => {
  return (
    <section className="my-24">
      {heading && (
        <SectionTitle heading={heading} subHeading={subHeading}></SectionTitle>
      )}
      <div className="grid md:grid-cols-2 gap-4">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      {title && <Link to={`/order/${title}`}>
        <button className="btn btn-outline border-0 border-b-2 text-black mt-4">
          Order {title}!
        </button>
      </Link>}
    </section>
  );
};

export default MenuCategory;
