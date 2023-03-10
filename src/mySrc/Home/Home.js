import "./Home.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import InfoBoard from "../components/InfoBoard/InfoBoard";
import Sidebar from "../components/Sidebar/Sidebar";
import { dataActions } from "../store/data-action";
import useFetch from "../hooks/useFetch";
import Transactions from "../components/Transaction/Transactions";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const { sendGetRequest } = useFetch();
  const navigate = useNavigate();
  const userName = useSelector((state) => state.login.userName);
  useEffect(() => {
    if (userName === "") navigate("/login");
    const getData = (data) => {
      // console.log(data);
      dispatch(dataActions.onLoad(data));
    };
    sendGetRequest("/admin/infomation", getData);
  }, [sendGetRequest, dispatch, userName]);
  return (
    <div className="mainAdmin">
      <Sidebar />
      <div className="homeContent">
        <InfoBoard />
        <Transactions numberRender={8} />
      </div>
    </div>
  );
};

export default Home;
