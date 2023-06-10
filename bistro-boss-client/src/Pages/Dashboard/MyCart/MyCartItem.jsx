import { FaTrashAlt } from "react-icons/fa";

const MyCartItem = ({item,index}) => {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img
                src={item.image}
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            <div className="font-bold">{item.name}</div>
            <div className="text-sm opacity-50">{item.category}</div>
          </div>
        </div>
      </td>
      <td>${item.price}</td>
      <td>
        <button className="btn btn-ghost btn-lg"><FaTrashAlt></FaTrashAlt></button>
      </td>
    </tr>
  );
};

export default MyCartItem;
