import UserListContent from "./UserListContent";
import "./UserList.css";
import UserListHead from "./UserListHead";
const UserList = (props) => {
  const data = props.data;
  return (
    <div className="mainUser_container">
      <h1>USER</h1>
      <div className="transs_container">
        <UserListHead />
        {data.map((d) => (
          <UserListContent data={d} />
        ))}
      </div>
    </div>
  );
};
export default UserList;
