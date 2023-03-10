import { useState } from "react";
import { useSelector } from "react-redux";
import Icon from "../Icon/Icon";
import Transaction from "./Transaction";
import TransationHead from "./TransactionHead/TransactionHead";
import "./Transactions.css";
const Transactions = (props) => {
  const trans = useSelector((state) => state.data.transaction);
  const [page, setPage] = useState(1);
  const numberRender = props.numberRender;
  const totalPages = Math.ceil(trans.length / numberRender);

  const nextPgHandler = () => {
    if (page < totalPages) setPage(page + 1);
  };
  const prePgHandler = () => {
    if (page > 1) setPage(page - 1);
  };
  return (
    <div className="transs_container">
      <TransationHead />
      {trans &&
        trans.length > 0 &&
        trans.map((data, i) => {
          if ((page - 1) * numberRender <= i && i <= numberRender * page)
            return <Transaction data={data} key={data._id} />;
        })}
      {trans.length === 0 && <h1>So sorry our conection so slowly ...</h1>}
      <hr />
      <div className="trans_page">
        <p>
          {page} - {numberRender} of {totalPages}
        </p>
        <span onClick={prePgHandler}>
          <Icon name="faAngleLeft" />
        </span>
        <span onClick={nextPgHandler}>
          <Icon name="faAngleRight" />
        </span>
      </div>
    </div>
  );
};

export default Transactions;
