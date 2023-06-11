import { Helmet } from "react-helmet-async";
import useCart from "../../../hooks/useCart";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MyCartItem from "./MyCartItem";

const MyCart = () => {
  const [cart, refetch] = useCart();
  const total = cart.reduce((sum, item) => item.price + sum, 0);


  const handleDelete = (item) => {
    fetch(`http://localhost:5000/carts/${item._id}`,{
      method:'DELETE'
    })
    .then(res=> res.json())
    .then(data=> {
      if(data.deletedCount>0){
        refetch()
      }
    })
  }


  return (
    <div>
      <Helmet>
        <title>Bistro Boss | My Cart</title>
      </Helmet>
      <SectionTitle
        heading="Wanna add more?"
        subHeading="My Cart"
      ></SectionTitle>
      <div className="uppercase font-semibold text-xl flex justify-between items-center">
        <h1>Total Items: {cart.length}</h1>
        <h1>Total Price: ${total}</h1>
        <button className="btn-sm text-xl btn-primary rounded">PAY</button>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Item</th>
              <th>Price</th>
              <th>Action</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
                cart.map((item,index) => <MyCartItem key={item._id} item={item} index={index} handleDelete={handleDelete}></MyCartItem>)
            }
            
          </tbody>
          {/* foot */}
        </table>
      </div>
    </div>
  );
};

export default MyCart;
