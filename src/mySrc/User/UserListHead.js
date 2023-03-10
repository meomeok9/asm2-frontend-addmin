import TransRow from "../components/Transaction/TransactionHead/TransRow";
import "./UserListHead.css";
const UserListHead = () => {
  return (
    <div className="usercontent_container">
      <div className="transcheckbox">
        <input type="checkbox" />
      </div>
      <TransRow isHead={true} title="ID" width="10%" />
      <TransRow isHead={true} title="Login Name" width="13%" />
      <TransRow isHead={true} title="Password" width="10%" />
      <TransRow isHead={true} title="Full Name" width="15%" />
      <TransRow isHead={true} title="Phone Number" width="15%" />
      <TransRow isHead={true} title="Email" width="15%" />
      <TransRow isHead={true} title="Admin" width="5%" />
      <TransRow isHead={true} title="Action" width="10%" />
    </div>
  );
};
export default UserListHead;
