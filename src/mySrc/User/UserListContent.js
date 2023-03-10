import TransRow from "../components/Transaction/TransactionHead/TransRow";
import "./UserListContent.css";
const UserListContent = (props) => {
  const data = props.data;
  return (
    <div className="head_container2">
      <div className="transcheckbox">
        <input type="checkbox" />
      </div>
      <TransRow isHead={false} title={data._id} width="10%" />
      <TransRow isHead={false} title={data.userName} width="13%" />
      <TransRow isHead={false} title={data.passWord} width="10%" />
      <TransRow isHead={false} title={data.fullName} width="15%" />
      <TransRow isHead={false} title={data.phoneNumber} width="15%" />
      <TransRow isHead={false} title={data.email} width="15%" />
      <TransRow isHead={false} title={data.isAdmin? "Admin" : "Normal"} width="5%" />
      <TransRow isHead={false} title="null" width="10%" />
    </div>
  );
};
export default UserListContent;
