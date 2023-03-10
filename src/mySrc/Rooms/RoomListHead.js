import TransRow from "../components/Transaction/TransactionHead/TransRow";
import "./RoomListHead.css";
const RoomListHead = () => {
  return (
    <div className="roomshead_container">
      <div className="transcheckbox">
        <input type="checkbox" />
      </div>
      <TransRow isHead={true} title="ID" width="10%" />
      <TransRow isHead={true} title="Title" width="10%" />
      <TransRow isHead={true} title="Description" width="25%" />
      <TransRow isHead={true} title="RoomNumber" width="13%"/>
      <TransRow isHead={true} title="Price" width="5%" />
      <TransRow isHead={true} title="Max Peple" width="10%" />
      <TransRow isHead={true} title="Actions" width="20%" />
    </div>
  );
};
export default RoomListHead;
