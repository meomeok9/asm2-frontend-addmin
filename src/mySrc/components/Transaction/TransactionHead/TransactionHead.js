import "./TransactionHead.css";
import TransRow from "./TransRow";

const TransationHead = () => {
  return (
    <div className="head_container2">
      <div className="transcheckbox">
        <input type="checkbox" />
      </div>
      <TransRow isHead={true} title="ID" width="10%" />
      <TransRow isHead={true} title="User" width="10%" />
      <TransRow isHead={true} title="Hotel" width="20%" />
      <TransRow isHead={true} title="Room" width="10%" />
      <TransRow isHead={true} title="Date" width="20%" />
      <TransRow isHead={true} title="Price" width="5%" />
      <TransRow isHead={true} title="Payment" width="10%" />
      <TransRow isHead={true} title="Status" width="10%" />
    </div>
  );
};
export default TransationHead;
