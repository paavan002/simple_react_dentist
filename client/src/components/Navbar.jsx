import { Link } from "react-router-dom";
import "../styles.css";

const Navbar = ({ setShowAdd }) => {
  return (
    <div className="navbar">
      <h2>Dentist Booking</h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/admin">Admin</Link>

        <button onClick={() => setShowAdd(true)}>
          Add Dentist
        </button>
      </div>
    </div>
  );
};

export default Navbar;