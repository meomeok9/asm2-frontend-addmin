import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { loginActions } from "../store/login-action";
import "./Login.css";
const Login = () => {
  const [userName, setUserName] = useState("");
  const [passWord, setPassWord] = useState("");
  const { sendPostRequest } = useFetch();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const nameChangeHandler = (e) => {
    if (e.target.value.trim().length > 0) setUserName(e.target.value);
    else setUserName("");
  };
  const passwordChangeHandler = (e) => {
    if (e.target.value.trim().length > 0) setPassWord(e.target.value);
    else setPassWord("");
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (userName.length === 0 || passWord.length === 0) {
      alert("Enter User Name and Password!");
      return;
    }
    const getData = (data, message) => {
      console.log(data);
      alert(message);
      if (message === "Login Sucess!") {
        dispatch(
          loginActions.onLogin({ userName: data.fullName, id: data._id })
        );
        navigate("/");
      }
    };
    sendPostRequest("/admin/login", { userName, passWord }, getData);
  };
  return (
    <div className="login_container">
      <h1>Admin App</h1>
      <form className="login_form" onSubmit={submitHandler}>
        <p>User Name:</p>
        <input type="text" onChange={nameChangeHandler} />
        <p>Password:</p>
        <input type="password" onChange={passwordChangeHandler} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
export default Login;
