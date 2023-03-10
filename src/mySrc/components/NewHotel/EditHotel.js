import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Sidebar from "../Sidebar/Sidebar";
import AddHotelForm from "./AddHotelForm";

const EditHotel = () => {
  const [edit, setEdit] = useState();
  const _id = useParams();
  const { sendPostRequest } = useFetch();
  const navigate = useNavigate();
  useEffect(() => {
    const getData = (d) => {
      setEdit(d);
    };
    sendPostRequest(`/admin/getEditHotel`, _id, getData);
  }, [sendPostRequest, _id]);

  const submitHandler = (h) => {
    h._id = _id;
    sendPostRequest("/admin/postEditHotel", h, () => {});
    navigate("/hotels");
  };

  return (
    <div className="newRoom_container">
      <Sidebar />
      {edit && (
        <AddHotelForm onSubmit={submitHandler} isEdit={true} data={edit} />
      )}
    </div>
  );
};

export default EditHotel;
