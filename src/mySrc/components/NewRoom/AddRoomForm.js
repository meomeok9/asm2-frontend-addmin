import { useEffect, useState } from "react";
import "./AddRoomForm.css";
const AddRoomForm = (props) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState(0);
  const [maxPeople, setMaxPeople] = useState(0);
  const [rooms, setRooms] = useState("");
  const isEdit = props.isEdit;
  useEffect(() => {
    if (isEdit) {
      setTitle(props.data.title);
      setDesc(props.data.desc);
      setPrice(props.data.price);
      setMaxPeople(props.data.maxPeople);
      setRooms(props.data.roomNumbers.toString());
    }
  }, [isEdit]);

  const titleChangeHandler = (e) => {
    if (e.target.value.trim().length > 0) setTitle(e.target.value);
    else setTitle("");
  };
  const descChangeHandler = (e) => {
    if (e.target.value.trim().length > 0) setDesc(e.target.value);
    else setDesc("");
  };
  const priceChangeHandler = (e) => {
    if (e.target.value.trim().length > 0 && parseInt(e.target.value) > 0)
      setPrice(parseInt(e.target.value));
    else setPrice(0);
  };
  const maxPeopleChangeHandler = (e) => {
    if (e.target.value.trim().length > 0 && parseInt(e.target.value) > 0)
      setMaxPeople(parseInt(e.target.value));
    else setMaxPeople(0);
  };
  const roomChangeHandler = (e) => {
    if (e.target.value.trim().length > 0) setRooms(e.target.value);
    else setRooms("");
  };
  const submitHander = (e) => {
    e.preventDefault();
    //console.log(title, desc, price, rooms, maxPeople);
    if (
      title === "" ||
      desc === "" ||
      price === 0 ||
      rooms === "" ||
      maxPeople === 0
    ) {
      alert("Some input infomations wrong!!");
      return;
    }
    let roomNumbers;
    try {
      // console.log(rooms);
      roomNumbers = rooms.split(",");
      //   console.log(roomNumbers);
      if (roomNumbers.includes(""))
        throw new Error("Input room is not valid!!");
      //check room array not a number type
      roomNumbers.map((r) => {
        if (isNaN(r)) {
          throw new Error("Input room is not valid!!");
        }
      });
    } catch (err) {
      alert(err);
      return;
    }
    props.onSubmit({ title, desc, maxPeople, price, roomNumbers });
  };
  return (
    <div className="formaddroom_container">
      <h2> Add new Room</h2>
      <form className="form_add_room" onSubmit={submitHander}>
        <div>
          <p>Title</p>
          <input type="text" onChange={titleChangeHandler} value={title} />
        </div>
        <div>
          <p>Description</p>
          <input type="text" onChange={descChangeHandler} value={desc} />
        </div>
        <div>
          <p>Price</p>
          <input type="number" onChange={priceChangeHandler} value={price} />
        </div>
        <div>
          <p>Max People</p>
          <input
            type="number"
            onChange={maxPeopleChangeHandler}
            value={maxPeople}
          />
        </div>
        <div>
          <p>Rooms</p>
          <input
            type="text"
            onChange={roomChangeHandler}
            placeholder="Give a comma between room numbers"
            value={rooms}
          />
        </div>

        <button type="submit">Send</button>
      </form>
    </div>
  );
};
export default AddRoomForm;
