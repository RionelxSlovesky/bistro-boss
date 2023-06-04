const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={image} alt={name} className="rounded-xl rounded-b-none" />
      </figure>
      <div className="px-10">
        <p className="bg-black text-center text-xl text-yellow-500 w-full py-1">${price}</p>
      </div>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions">
          <button className="btn bg-black text-yellow-500">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
