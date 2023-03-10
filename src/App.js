import { Route, Routes } from "react-router-dom";
import Login from "./mySrc/auth/Login";
import Logout from "./mySrc/auth/Logout";
import EditHotel from "./mySrc/components/NewHotel/EditHotel";
import NewHotel from "./mySrc/components/NewHotel/NewHotel";
import EditRoom from "./mySrc/components/NewRoom/EditRoom";
import NewRoom from "./mySrc/components/NewRoom/NewRoom";
import Home from "./mySrc/Home/Home";
import Hotels from "./mySrc/Hotels/Hotels";
import Rooms from "./mySrc/Rooms/Rooms";
import TransactionList from "./mySrc/Transactions/TransactionList";
import Users from "./mySrc/User/Users";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/users" element={<Users />} />
        <Route path="/transactions" element={<TransactionList />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/newroom" element={<NewRoom />} />
        <Route path="/editRoom/:_id" element={<EditRoom />} />
        <Route path="/newhotel" element={<NewHotel />} />
        <Route path="/editHotel/:_id" element={<EditHotel />} />
      </Routes>
    </div>
  );
}

export default App;
