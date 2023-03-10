import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Sidebar from "../Sidebar/Sidebar";
import AddRoomForm from "./AddRoomForm";
import "./NewRoom.css";
const NewRoom = () => {
  const navigate = useNavigate();
  const { sendPostRequest } = useFetch();
  const submitHandler = (r) => {
    const getData = (data) => {
      console.log(data);
    };
    sendPostRequest("/admin/addroom", r, getData);
    navigate("/rooms");
  };
  return (
    <div className="newRoom_container">
      <Sidebar />
      <AddRoomForm onSubmit={submitHandler} />
    </div>
  );
};
export default NewRoom;
