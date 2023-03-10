import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import useFetch from "../hooks/useFetch";
import HotelList from "./HotelList";
import "./Hotels.css";
const Hotels = () => {
  const { sendGetRequest, sendPostRequest } = useFetch();
  const [data, setData] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    const getData = (d) => {
      // console.log(d);
      setData(d);
    };
    sendGetRequest("/admin/allHotels", getData);
  }, [sendGetRequest]);

  const deleteHandler = (id) => {
    const getData = (d, message) => {
      setData(d);
      alert(message);
    };
    sendPostRequest("/admin/deletehotel", { _id: id }, getData);
  };
  const editHandler = (id) => {
    navigate(`/editHotel/${id}`);
  };

  return (
    <div className="mainAdmin">
      <Sidebar />
      {data && (
        <HotelList data={data} onDelete={deleteHandler} onEdit={editHandler} />
      )}
      {!data &&<div className="loading"><h1>Loading...</h1></div> }
    </div>
  );
};
export default Hotels;
