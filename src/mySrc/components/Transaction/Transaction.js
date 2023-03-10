import useConvertDate from "../../hooks/useConvertDate";

import "./Transaction.css";
import TransRow from "./TransactionHead/TransRow";

const Transaction = (props) => {
  const data = props.data;
  const date = `${useConvertDate(data.dateStart)} - ${useConvertDate(
    data.dateEnd
  )}`;
  let rooms = data.rooms.reduce((pre, cur) => pre + ", " + cur.roomNumber, "");
  rooms = rooms.substring(1);

  return (
    <div className="head_container23">
      <div className="transcheckbox">
        <input type="checkbox" />
      </div>
      <TransRow isHead={false} title={data._id} width="10%" />
      <TransRow isHead={false} title={data.userName} width="10%" />
      <TransRow isHead={false} title={data.hotelName} width="20%" />
      <TransRow isHead={false} title={rooms} width="10%" />
      <TransRow isHead={false} title={date} width="20%" />
      <TransRow isHead={false} title={data.price} width="5%" />
      <TransRow isHead={false} title={data.payment} width="10%" />
      <TransRow isHead={false} status={true} title={data.status} width="10%" />
    </div>
  );
};
export default Transaction;
