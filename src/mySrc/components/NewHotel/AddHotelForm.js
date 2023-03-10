import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import "./AddHotelForm.css";
import RoomInputCheck from "./RoomInputCheck";
const AddHotelForm = (props) => {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [distance, setDistance] = useState(0);
  const [type, setType] = useState("");
  const [cheapestPrice, setCheapestPrice] = useState(0);
  const [desc, setDesc] = useState("");
  const [photos, setPhotos] = useState("");
  const [roomsData, setRoomsData] = useState();
  const [featured, setFeatured] = useState(false);
  const [rooms, setRooms] = useState([]);
  const [rate, setRate] = useState(0);
  const { sendGetRequest } = useFetch();
  useEffect(() => {
    const getData = (rooms) => {
      setRoomsData(rooms);
    };
    sendGetRequest("/admin/allRooms", getData);
  }, [sendGetRequest]);

  const isEdit = props.isEdit;
  useEffect(() => {
    if (isEdit) {
      setName(props.data.name);
      setTitle(props.data.title);
      setDesc(props.data.desc);
      setCheapestPrice(props.data.cheapestPrice);
      setAddress(props.data.address);
      setRooms(props.data.rooms);
      setPhotos(props.data.photos.toString());
      setCity(props.data.city);
      setDistance(props.data.distance);
      setFeatured(props.data.featured);
      setType(props.data.type);
      setRate(props.data.rating || 0);
    }
  }, [isEdit]);

  const inputNameChange = (e) => {
    if (e.target.value.trim().length > 0) setName(e.target.value);
    else setName("");
  };
  const inputTitleChange = (e) => {
    if (e.target.value.trim().length > 0) setTitle(e.target.value);
    else setTitle("");
  };
  const inputCityChange = (e) => {
    if (e.target.value.trim().length > 0) setCity(e.target.value);
    else setCity("");
  };
  const inputAddressChange = (e) => {
    if (e.target.value.trim().length > 0) setAddress(e.target.value);
    else setAddress("");
  };
  const inputDistanceChange = (e) => {
    if (e.target.value.trim().length > 0 && e.target.value > 0)
      setDistance(e.target.value);
    else setDistance(0);
  };
  const inputPriceChange = (e) => {
    if (e.target.value.trim().length > 0 && e.target.value > 0)
      setCheapestPrice(e.target.value);
    else setCheapestPrice(0);
  };
  const inputTypeChange = (e) => {
    if (e.target.value.trim().length > 0) setType(e.target.value);
    else setType("");
  };
  const inputDescChange = (e) => {
    if (e.target.value.trim().length > 0) setDesc(e.target.value);
    else setDesc("");
  };
  const inputPhotosChange = (e) => {
    if (e.target.value.trim().length > 0) setPhotos(e.target.value);
    else setPhotos("");
  };
  const inputRoomsChangeHandler = (e) => {
    if (e.target.checked) {
      rooms.push(e.target.value);
      setRooms(rooms);
    }
    const i = rooms.findIndex((i) => e.target.value === i);
    if (!e.target.checked) {
      rooms.splice(i, 1);
      setRooms(rooms);
    }
  };
  const featuredChangeHandler = (e) => {
    setFeatured(e.target.value);
  };
  const rateChangeHandler = (e) => {
    if (e.target.value > 5 || e.target.value < 0) {
      alert("Rate >=0 or Rate <=5 !!");
      e.target.value = 0;
    }
    setRate(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (
      name === "" ||
      city === "" ||
      title === "" ||
      desc === "" ||
      cheapestPrice === 0 ||
      address === "" ||
      distance === 0 ||
      type === "" ||
      photos === "" ||
      rooms.length === 0
    ) {
      alert("Some input infomations wrong!!");
      return;
    }
    let imgs;
    // console.log(rooms);
    try {
      imgs = photos.split(",");
      if (imgs.includes("")) throw new Error("Input photos is not valid!!");
    } catch (err) {
      alert(err);
      return;
    }
    props.onSubmit({
      name,
      type,
      title,
      address,
      desc,
      city,
      rooms,
      cheapestPrice,
      photos: imgs,
      distance,
      featured,
      rating: rate,
    });
  };
  const clickRoomHandler = (e) => {
    e.target.checked = !e.target.checked;
  };

  return (
    <div className="addform_container">
      <h3>Add new Hotel</h3>
      <form onSubmit={submitHandler}>
        <div className="addhotel_input_ctn">
          <div>
            <p>Name</p>
            <input
              type="text"
              onChange={inputNameChange}
              value={name}
              placeholder="Name"
            />
            <p>Type</p>
            <input
              type="text"
              onChange={inputTypeChange}
              value={type}
              placeholder="Type"
            />
            <p>Title</p>
            <input
              type="text"
              onChange={inputTitleChange}
              value={title}
              placeholder="Title"
            />
            <p>City</p>
            <input
              type="text"
              onChange={inputCityChange}
              value={city}
              placeholder="City"
            />
            <p>Address</p>
            <input
              type="text"
              onChange={inputAddressChange}
              value={address}
              placeholder="Address"
            />
          </div>
          <div>
            <p>Distance</p>
            <input
              type="number"
              onChange={inputDistanceChange}
              value={distance}
            />
            <p>Cheapest Price</p>
            <input
              type="number"
              onChange={inputPriceChange}
              value={cheapestPrice}
            />
            <p>Description</p>
            <input
              type="text"
              onChange={inputDescChange}
              value={desc}
              placeholder="Description"
            />
            <p>Photos</p>
            <input
              type="text"
              onChange={inputPhotosChange}
              value={photos}
              placeholder="Give a comma between Photo URl"
            />
            <div className="add_rate">
              <div>
                <p>Feature</p>
                <select value={featured} onChange={featuredChangeHandler}>
                  <option value={false}>No</option>
                  <option value={true}>Yes</option>
                </select>
              </div>
              {isEdit && (
                <div>
                  <p>Add rate Hotel</p>
                  <input
                    type="number"
                    min={0}
                    max={5}
                    value={rate}
                    onChange={rateChangeHandler}
                    step="0.1"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="rooms_check_container">
          {!isEdit &&
            roomsData &&
            roomsData.length > 0 &&
            roomsData.map((r) => (
              <div key={r._id} className="addrooms_check">
                <input
                  type="checkbox"
                  onChange={inputRoomsChangeHandler}
                  value={r._id}
                />
                <p> {r.title}</p>{" "}
              </div>
            ))}
          {isEdit &&
            roomsData &&
            roomsData.length > 0 &&
            roomsData.map((r) => (
              <div key={r._id} className="addrooms_check">
                <RoomInputCheck
                  inputRoomsChangeHandler={inputRoomsChangeHandler}
                  checked={props.data.rooms.includes(r._id)}
                  id={r._id}
                />
                <p> {r.title}</p>{" "}
              </div>
            ))}
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};
export default AddHotelForm;
