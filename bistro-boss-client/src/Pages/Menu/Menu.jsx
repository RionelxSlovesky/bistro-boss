import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import menuImg from '../../assets/menu/banner3.jpg'
import dessertImg from '../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import soupImg from '../../assets/menu/soup-bg.jpg'
import useMenu from "../../hooks/useMenu";
import MenuCategory from "./MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter(item=> item.category === 'dessert')
  const pizza = menu.filter(item=> item.category === 'pizza')
  const salad = menu.filter(item=> item.category === 'salad')
  const soup = menu.filter(item=> item.category === 'soup')
  const offered = menu.filter(item=> item.category === 'offered')
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>

      <Cover img={menuImg} title="Our Menu"></Cover>
      <MenuCategory subHeading="Don't Miss" heading="Today's Offer" items={offered}></MenuCategory>

      <Cover img={dessertImg} title="Desserts"></Cover>
      <MenuCategory title="dessert" items={dessert}></MenuCategory>

      <Cover img={pizzaImg} title="Pizzas"></Cover>
      <MenuCategory title="pizza" items={pizza}></MenuCategory>
      
      <Cover img={saladImg} title="Salads"></Cover>
      <MenuCategory title="salad" items={salad}></MenuCategory>

      <Cover img={soupImg} title="Soups"></Cover>
      <MenuCategory title="soup" items={soup}></MenuCategory>
      
    </div>
  );
};

export default Menu;
