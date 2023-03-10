import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import Transactions from "../components/Transaction/Transactions";

const TransactionList = () => {
  const navigate = useNavigate();
  const trans = useSelector((state) => state.data.transaction);
  useEffect(() => {
    if (trans.length === 0) {
      navigate("/");
    }
  }, []);

  return (
    <div className="mainAdmin">
      <Sidebar />
      <div className="homeContent">
        <div>
          <h2>Transaction List</h2>
        </div>
        <Transactions numberRender={10} />
      </div>
    </div>
  );
};
export default TransactionList;
