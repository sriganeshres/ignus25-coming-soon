import React, { useState } from "react";
import ReactDOM from "react-dom";
import { NavLink } from "react-router-dom";
import './Header.css';
import ignus_logo from '../../public/ignus_logo.png';


// import Register from "./register/Register.jsx";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <header className="header">
      <div className="logo">
        <NavLink to="/" end>
          <img src={ignus_logo} alt="Ignus_Logo" className="logo-img" ></img>
        </NavLink>
      </div>
      <nav className="nav-links">
        <NavLink to="/events">Events</NavLink>
        <NavLink to="/workshop">Workshop</NavLink>
        <NavLink to="/prakriti">Prakriti</NavLink>
        <NavLink to="/ca">CA</NavLink>
        <NavLink to="/past-sponsors">Past Sponsors</NavLink>
        <NavLink to="/register">Register</NavLink>
      </nav>

      <button className="register-btn" onClick={openModal}>REGISTER</button>
      
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <form>
              <label>
                Name:
                <input type="text" name="name" />
              </label>
              <label>
                College:
                <input type="text" name="college" />
              </label>
              <label>
                Number:
                <input type="text" name="number" />
              </label>
              <label>
                Email:
                <input type="email" name="email" />
              </label>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
