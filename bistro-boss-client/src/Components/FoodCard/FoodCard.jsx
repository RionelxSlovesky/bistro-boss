import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useLocation, useNavigate } from 'react-router-dom'
import useCart from "../../hooks/useCart";

const FoodCard = ({ item }) => {
  const { name, image, price, recipe, _id } = item;
  const { user } = useContext(AuthContext);
  const [,refetch] = useCart()
  const navigate = useNavigate();
  const location = useLocation();

  const handleAddToCart = (item) => {
    if(user && user.email){
      const cartItem = {menuItemId: _id, name, image, price, email: user.email }
      fetch('http://localhost:5000/carts', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(cartItem)
      })
      .then(res => res.json())
      .then(data => {
        if(data.insertedId){
          // alert('Item added to the Cart')
          refetch()
        }
      })
    }else{
      navigate('/login', {state: {from: location}})
    }
  };
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={image} alt={name} className="rounded-xl rounded-b-none" />
      </figure>
      <div className="px-10">
        <p className="bg-black text-center text-xl text-yellow-500 w-full py-1 rounded-xl rounded-t-none">
          ${price}
        </p>
      </div>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions">
          <button
            onClick={() => handleAddToCart(item)}
            className="btn bg-black text-yellow-500"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
