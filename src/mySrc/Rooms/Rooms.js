import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import useFetch from "../hooks/useFetch";
import RoomList from "./RoomList";
import "./Rooms.css";
const Rooms = () => {
  const [data, setData] = useState();
  const { sendGetRequest, sendPostRequest } = useFetch();
  const navigate = useNavigate();
  useEffect(() => {
    const getData = (d) => {
      //console.log(d);
      setData(d);
    };
    sendGetRequest("/admin/allRooms", getData);
  }, [sendGetRequest]);

  const deleteHandler = (id) => {
    const getData = (d, message) => {
      setData(d);
      alert(message);
    };
    sendPostRequest ("/admin/deleteroom", { id: id }, getData);
  };
  const editHandler = (id) => {
    navigate(`/editRoom/${id}`);
  };
  return (
    <div className="mainAdmin">
      <Sidebar />
      {data && (
        <RoomList data={data} onDelete={deleteHandler} onEdit={editHandler} />
      )}
      {!data && (
        <div className="loading">
          <h1>Loading...</h1>
        </div>
      )}
    </div>
  );
};
export default Rooms;
