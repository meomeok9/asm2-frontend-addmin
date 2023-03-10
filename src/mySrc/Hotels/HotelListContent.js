import Icon from "../components/Icon/Icon";
import TransRow from "../components/Transaction/TransactionHead/TransRow";
import "./HotelListContent.css";

const HotelListContent = (props) => {
  const data = props.data;
  const editHandler = () => {
    props.onEdit(data._id);
  };
  const deleteHandler = () => {
    if (window.confirm("Are you sure to delete?")) props.onDelete(data._id);
  };
  return (
    <div className="hotels_container">
      <div className="transcheckbox">
        <input type="checkbox" />
      </div>
      <TransRow isHead={false} title={data._id} width="25%" />
      <TransRow isHead={false} title={data.name} width="30%" />
      <TransRow isHead={false} title={data.type} width="10%" />
      <TransRow isHead={false} title={(data.rating || 0) + " ⭐"} width="10%" />
      <TransRow isHead={false} title={data.city} width="15%" />
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
export default HotelListContent;
