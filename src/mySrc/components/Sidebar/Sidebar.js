import { NavLink } from "react-router-dom";
import Icon from "../Icon/Icon";
import "./Sidebar.css";
const Sidebar = () => {
  return (
    <div className="sidebar_container">
      <h2>Admin Page</h2>
      <ul>
        <li>
          MAIN
          <ul>
            <NavLink to="/" className="sidebar_navlink">
              <li className="link_sidebar">
                <Icon name="faGripVertical" />
                Dashboard
              </li>
            </NavLink>
          </ul>
        </li>
        <li>
          LIST
          <ul>
            <NavLink to="/users" className="sidebar_navlink">
              <li className="link_sidebar">
                <Icon name="faUser" />
                Users
              </li>
            </NavLink>
            <NavLink to="/hotels" className="sidebar_navlink">
              <li className="link_sidebar">
                <Icon name="faHotel" />
                Hotels
              </li>
            </NavLink>
            <NavLink to="/rooms" className="sidebar_navlink">
              <li className="link_sidebar">
                <Icon name="faShop" />
                Rooms
              </li>
            </NavLink>
            <NavLink to="/transactions" className="sidebar_navlink">
              <li className="link_sidebar">
                <Icon name="faTruck" />
                Transactions
              </li>
            </NavLink>
          </ul>
        </li>
        <li>
          NEW
          <ul>
            <NavLink to="/newhotel" className="sidebar_navlink">
              <li className="link_sidebar">
                <Icon name="faHotel" />
                New Hotel
              </li>
            </NavLink>

            <NavLink to="/newroom" className="sidebar_navlink">
              <li className="link_sidebar">
                <Icon name="faShop" />
                New Room
              </li>
            </NavLink>
          </ul>
        </li>
        <li>
          USER
          <ul>
            <NavLink to="/logout" className="sidebar_navlink">
              <li className="link_sidebar">
                <Icon name="faRightFromBracket" />
                Logout
              </li>
            </NavLink>
          </ul>
        </li>
      </ul>
    </div>
  );
};
export default Sidebar;
