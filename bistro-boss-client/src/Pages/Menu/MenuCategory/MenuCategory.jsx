import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ subHeading, heading, items }) => {
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
    </section>
  );
};

export default MenuCategory;
