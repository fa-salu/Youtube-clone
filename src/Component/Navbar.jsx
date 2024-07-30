import React from 'react';
import { FaSearch, FaVideo, FaBell, FaUserCircle } from 'react-icons/fa'; 

const Navbar = () => {
  return (
    <nav style={style.navbar}>
      <div style={style.logoContainer}>
        <img
          src="https://www.iconpacks.net/icons/2/free-youtube-logo-icon-2431-thumb.png"
          alt="YouTube Logo"
          style={style.logo}
        />
      </div>
      <div style={style.searchContainer}>
        <input type="text" placeholder="Search" style={style.searchInput} />
        <button style={style.searchButton}>
          <FaSearch style={style.searchIcon} />
        </button>
      </div>
      <div style={style.iconsContainer}>
        <button style={style.iconButton}>
          <FaVideo />
        </button>
        <button style={style.iconButton}>
          <FaBell />
        </button>
        <button style={style.iconButton}>
          <FaUserCircle />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

const style = {
  navbar: {
    position: 'fixed', 
    top: 0,
    left: 0,
    width: '100%', 
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px 20px',
    backgroundColor: '#fff',
    borderBottom: '1px solid #eaeaea',
    zIndex: 100,
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '50px',
  },
  logo: {
    height: '30px',
  },
  searchContainer: {
    display: 'flex',
    alignItems: 'center',
    maxWidth: '600px',
    width: '100%',
    margin: '0 20px',
    position: 'relative',
  },
  searchInput: {
    width: '100%',
    padding: '10px',
    borderRadius: '20px',
    border: '1px solid #ccc',
    outline: 'none',
  },
  searchButton: {
    position: 'absolute',
    right: '10px',
    border: 'none',
    backgroundColor: 'transparent',
    cursor: 'pointer',
  },
  searchIcon: {
    color: '#606060', 
  },
  iconsContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  iconButton: {
    background: 'none',
    border: 'none',
    margin: '0 10px',
    cursor: 'pointer',
  },
};
