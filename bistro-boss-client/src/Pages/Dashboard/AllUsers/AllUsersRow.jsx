import {FaTrashAlt, FaUserShield} from 'react-icons/fa'

const AllUsersRow = ({user ,index}) => {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>
        <div className="flex items-center space-x-3">
          <div>
            <div className="font-bold">{user.name}</div>
          </div>
        </div>
      </td>
      <td>{user.email}</td>
      <td>{user.role === 'admin' ? 'admin' : <button className="btn btn-ghost btn-lg"><FaUserShield></FaUserShield></button>}</td>
      <td><button className="btn btn-ghost btn-lg"><FaTrashAlt></FaTrashAlt></button></td>
    </tr>
  );
};

export default AllUsersRow;
