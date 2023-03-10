import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Sidebar from "../Sidebar/Sidebar";
import AddRoomForm from "./AddRoomForm";
import "./NewRoom.css";
const EditRoom = () => {
  const _id = useParams();

  const [edit, setEdit] = useState();
  const navigate = useNavigate();
  const { sendPostRequest } = useFetch();

  useEffect(() => {
    const getData = (d) => {
      setEdit(d);
    };
    sendPostRequest(`/admin/getEditRoom`, _id, getData);
  }, [sendPostRequest, _id]);

  const submitHandler = (r) => {
    r._id = _id;
    sendPostRequest("/admin/postEditRoom", r, () => {});
    navigate("/rooms");
  };
  return (
    <div className="newRoom_container">
      <Sidebar />
      {edit && (
        <AddRoomForm onSubmit={submitHandler} isEdit={true} data={edit} />
      )}
    </div>
  );
};
export default EditRoom;
