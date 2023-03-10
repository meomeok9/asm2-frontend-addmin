import { useSelector } from "react-redux";
import "./InfoBoard.css";
const InfoBoard = () => {
  const totalUser = useSelector((state) => state.data.totalUser);
  const totalOrder = useSelector((state) => state.data.totalOrder);
  const revenue = useSelector((s) => s.data.revenue);
  const avangeRevenue = useSelector((sta) => sta.data.avangeRevenue);
  return (
    <div className="inforbar_container">
      <div>
        <h3>User</h3>
        <p>{totalUser}</p>
      </div>
      <div>
        <h3>Orders</h3>
        <p>{totalOrder}</p>
      </div>
      <div>
        <h3>Earnings</h3>
        <p>${revenue}</p>
      </div>
      <div>
        <h3>Balance</h3>
        <p>${avangeRevenue}</p>
      </div>
    </div>
  );
};
export default InfoBoard;
