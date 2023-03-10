import Icon from "../components/Icon/Icon";
import TransRow from "../components/Transaction/TransactionHead/TransRow";

import "./RoomListContent.css";
const RoomListContent = (props) => {
  const data = props.data;
  const editHandler = () => {
    props.onEdit(data._id);
  };
  const deleteHandler = () => {
    if (window.confirm("Are you sure to delete?")) props.onDelete(data._id);
  };
  return (
    <div className="roomscontent">
      <div className="transcheckbox">
        <input type="checkbox" />
      </div>
      <TransRow isHead={false} title={data._id} width="10%" />
      <TransRow isHead={false} title={data.title} width="10%" />
      <TransRow isHead={false} title={data.desc} width="25%" />
      <TransRow
        isHead={false}
        title={data.roomNumbers.toString()}
        width="13%"
      />
      <TransRow isHead={false} title={data.price} width="5%" />
      <TransRow isHead={false} title={data.maxPeople} width="10%" />
      <div className="actionContainer">
        <button type="button" onClick={editHandler}>
          <Icon name="faScrewdriverWrench" /> Edit
        </button>
        <button type="button" onClick={deleteHandler}>
          <Icon name="faTrashCan" />
          delete
        </button>
      </div>
    </div>
  );
};
export default RoomListContent;
