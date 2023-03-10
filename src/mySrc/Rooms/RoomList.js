import { useNavigate } from "react-router-dom";
import "./RoomList.css";
import RoomListContent from "./RoomListContent";
import RoomListHead from "./RoomListHead";
const RoomList = (props) => {
  const data = props.data;
  const navigate = useNavigate();
  const toAddNew = () => {
    navigate("/newroom");
  };
  return (
    <div className="roomListMain">
      <div className="roomsListHead">
        <h2>Room List</h2>{" "}
        <button type="button" onClick={toAddNew}>
          Add New
        </button>
      </div>
      <div className="transs_container">
        <RoomListHead />
        {data &&
          data.map((d) => (
            <RoomListContent
              data={d}
              key={d._id}
              onDelete={props.onDelete}
              onEdit={props.onEdit}
            />
          ))}
      </div>
    </div>
  );
};

export default RoomList;
