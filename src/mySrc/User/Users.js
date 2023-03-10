import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import useFetch from "../hooks/useFetch";
import UserList from "./UserList";
import "./Users.css";
const Users = () => {
  const { sendGetRequest } = useFetch();
  const [data, setData] = useState();
  useEffect(() => {
    const getData = (d) => {
      console.log(d);
      setData(d);
    };
    sendGetRequest("/admin/allUsers", getData);
  }, [sendGetRequest]);
  return (
    <div className="mainUser">
      <Sidebar />
      {data && <UserList data={data} />}
      {!data && (
        <div className="loading">
          <h1>Loading...</h1>
        </div>
      )}
    </div>
  );
};
export default Users;
