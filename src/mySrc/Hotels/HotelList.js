import { useNavigate } from "react-router-dom";
import "./HotelList.css";
import HotelListContent from "./HotelListContent";
import HotelListHead from "./HotelListHead";
const HotelList = (props) => {
  const data = props.data;
  const navigate = useNavigate();
  const toAddNew = () => {
    navigate("/newhotel");
  };
  return (
    <div className="roomListMain">
      <div className="roomsListHead">
        <h2>Hotel List</h2>{" "}
        <button type="button" onClick={toAddNew}>
          Add New
        </button>
      </div>
      <div className="transs_container">
        <HotelListHead />
        {data &&
          data.map((d) => (
            <HotelListContent
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

export default HotelList;
