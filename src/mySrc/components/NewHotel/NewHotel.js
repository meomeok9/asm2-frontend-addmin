import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Sidebar from "../Sidebar/Sidebar";
import AddHotelForm from "./AddHotelForm";
import "./NewHotel.css";
const NewHotel = () => {
  const navigate = useNavigate();
  const { sendPostRequest } = useFetch();
  const submitHandler = (h) => {
    sendPostRequest("/admin/addHotel", h, ()=>{});
    navigate("/hotels");
  };
  return (
    <div className="newRoom_container">
      <Sidebar />
      <AddHotelForm onSubmit={submitHandler} />
    </div>
  );
};
export default NewHotel;
