
const MenuItem = ({item}) => {
    const {image, name, price, recipe} = item;
    return (
        <div className="flex gap-3">
            <img style={{borderRadius:"0 200px 200px 200px"}} src={image} className="w-20 h-16" alt="" />
            <div>
                <h2 className="text-xl uppercase">{name}</h2>
                <p>{recipe}</p>
            </div>    
            <p className="text-lg text-yellow-600">${price}</p>
        </div>
    );
};

export default MenuItem;