import { useState } from "react";
import orderCoverImg from "../../assets/shop/banner2.jpg";
import Cover from "../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import useMenu from "../../hooks/useMenu";
import FoodCard from "../../Components/FoodCard/FoodCard";
import { useParams } from "react-router-dom";

const Order = () => {
  const [menu] = useMenu();
  const { category } = useParams();
  let index;

  if (category === "salad") {
    index = 0;
  } else if (category === "pizza") {
    index = 1;
  } else if (category === "soup") {
    index = 2;
  } else if (category === "dessert") {
    index = 3;
  } else if (category === "drinks") {
    index = 4;
  }
  const [tabIndex, setTabIndex] = useState(index);

  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const drinks = menu.filter((item) => item.category === "drinks");
  return (
    <div>
      <Cover img={orderCoverImg} title="Order Food"></Cover>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Dessert</Tab>
          <Tab>Drinks</Tab>
        </TabList>
        <TabPanel>
          <div className="flex flex-wrap justify-center gap-10">
            {salad.map((item) => (
              <FoodCard key={item._id} item={item}></FoodCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="flex flex-wrap justify-center gap-10">
            {pizza.map((item) => (
              <FoodCard key={item._id} item={item}></FoodCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="flex flex-wrap justify-center gap-10">
            {soup.map((item) => (
              <FoodCard key={item._id} item={item}></FoodCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="flex flex-wrap justify-center gap-10">
            {dessert.map((item) => (
              <FoodCard key={item._id} item={item}></FoodCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="flex flex-wrap justify-center gap-10">
            {drinks.map((item) => (
              <FoodCard key={item._id} item={item}></FoodCard>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
