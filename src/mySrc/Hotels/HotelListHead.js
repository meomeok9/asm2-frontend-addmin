import TransRow from "../components/Transaction/TransactionHead/TransRow";
import "./HotelListHead.css";
const HotelListHead =()=>{

  return (
    <div className="roomshead_container">
      <div className="transcheckbox">
        <input type="checkbox" />
      </div>
      <TransRow isHead={true} title="ID" width="25%" />
      <TransRow isHead={true} title="Name" width="30%" />
      <TransRow isHead={true} title="Type" width="10%" />
      <TransRow isHead={true} title="Rate" width="10%" />
      <TransRow isHead={true} title="City" width="15%" />
      <TransRow isHead={true} title="Actions" width="20%" />
    </div>
  );



}
export default HotelListHead;