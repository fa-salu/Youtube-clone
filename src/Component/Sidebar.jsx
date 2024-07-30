// import React, { useState } from 'react';
// import { FaHome, FaFire, FaPlayCircle, FaClock, FaRegClock, FaThumbsUp, FaList, FaMusic, FaGamepad, FaCog, FaBars } from 'react-icons/fa';

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(true);

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div>
//       <button style={style.toggleButton} onClick={toggleSidebar}>
//         <FaBars style={style.toggleIcon} />
//       </button>
//       {isOpen && (
//         <div style={style.sidebar}>
//           <div style={style.logoContainer}>
//             <img
//               src="https://upload.wikimedia.org/wikipedia/commons/6/64/YouTube_icon_%282013-2017%29.png"
//               alt="YouTube Logo"
//               style={style.logo}
//             />
//           </div>
//           <nav style={style.nav}>
//             <a href="#" style={style.navItem}><FaHome style={style.icon} /> Home</a>
//             <a href="#" style={style.navItem}><FaFire style={style.icon} /> Trending</a>
//             <a href="#" style={style.navItem}><FaPlayCircle style={style.icon} /> Subscriptions</a>
//             <a href="#" style={style.navItem}><FaClock style={style.icon} /> History</a>
//             <a href="#" style={style.navItem}><FaRegClock style={style.icon} /> Watch Later</a>
//             <a href="#" style={style.navItem}><FaThumbsUp style={style.icon} /> Liked Videos</a>
//             <a href="#" style={style.navItem}><FaList style={style.icon} /> Playlists</a>
//             <a href="#" style={style.navItem}><FaMusic style={style.icon} /> Music</a>
//             <a href="#" style={style.navItem}><FaGamepad style={style.icon} /> Gaming</a>
//             <a href="#" style={style.navItem}><FaCog style={style.icon} /> Settings</a>
//           </nav>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Sidebar;

// const style = {
//   sidebar: {
//     width: '250px',
//     height: '100vh',
//     backgroundColor: '#f9f9f9',
//     borderRight: '1px solid #eaeaea',
//     padding: '20px',
//     boxSizing: 'border-box',
//     display: 'flex',
//     flexDirection: 'column',
//     position: 'fixed',
//     top: 0,
//     left: 0,
//     transition: 'transform 0.3s ease',
//   },
//   logoContainer: {
//     display: 'flex',
//     alignItems: 'center',
//     marginBottom: '20px',
//   },
//   logo: {
//     height: '40px',
//   },
//   nav: {
//     display: 'flex',
//     flexDirection: 'column',
//   },
//   navItem: {
//     display: 'flex',
//     alignItems: 'center',
//     padding: '10px 0',
//     textDecoration: 'none',
//     color: '#333',
//     fontSize: '16px',
//     fontWeight: '500',
//   },
//   icon: {
//     marginRight: '10px',
//   },
//   toggleButton: {
//     position: 'fixed',
//     top: '20px',
//     left: '20px',
//     background: '#fff',
//     border: '1px solid #ccc',
//     borderRadius: '50%',
//     padding: '10px',
//     cursor: 'pointer',
//     zIndex: 1000,
//   },
//   toggleIcon: {
//     color: '#333',
//   },
// };

import React, { useState } from "react";
import {
  FaHome,
  FaFire,
  FaPlayCircle,
  FaClock,
  FaRegClock,
  FaThumbsUp,
  FaList,
  FaMusic,
  FaGamepad,
  FaCog,
  FaBars,
} from "react-icons/fa";

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div style={{ ...style.sidebar, width: isExpanded ? "250px" : "60px" }}>
      <button style={style.toggleButton} onClick={toggleSidebar}>
        <FaBars style={style.toggleIcon} />
      </button>
      <div style={style.logoContainer}>
        {isExpanded ? (
          <img
            src="https://www.iconpacks.net/icons/2/free-youtube-logo-icon-2431-thumb.png"
            alt="YouTube Logo"
            style={style.logo}
          />
        ) : (
          <div style={style.isExpanded}></div>
        )}
      </div>
      <nav style={style.nav}>
        <a href="#" style={style.navItem}>
          <FaHome style={style.icon} /> {isExpanded && "Home"}
        </a>
        <a href="#" style={style.navItem}>
          <FaFire style={style.icon} /> {isExpanded && "Trending"}
        </a>
        <a href="#" style={style.navItem}>
          <FaPlayCircle style={style.icon} /> {isExpanded && "Subscriptions"}
        </a>
        <a href="#" style={style.navItem}>
          <FaClock style={style.icon} /> {isExpanded && "History"}
        </a>
        <a href="#" style={style.navItem}>
          <FaRegClock style={style.icon} /> {isExpanded && "Watch Later"}
        </a>
        <a href="#" style={style.navItem}>
          <FaThumbsUp style={style.icon} /> {isExpanded && "Liked Videos"}
        </a>
        <a href="#" style={style.navItem}>
          <FaList style={style.icon} /> {isExpanded && "Playlists"}
        </a>
        <a href="#" style={style.navItem}>
          <FaMusic style={style.icon} /> {isExpanded && "Music"}
        </a>
        <a href="#" style={style.navItem}>
          <FaGamepad style={style.icon} /> {isExpanded && "Gaming"}
        </a>
        <a href="#" style={style.navItem}>
          <FaCog style={style.icon} /> {isExpanded && "Settings"}
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;

const style = {
  sidebar: {
    height: "100vh",
    backgroundColor: "#fff",
    borderRight: "1px solid #eaeaea",
    padding: "20px",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    position: "fixed",
    top: 0,
    left: 0,
    transition: "width 0.3s ease",
    overflow: "hidden",
    zIndex: "200",
  },
  isExpanded: {
    marginTop: "30px",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    marginBottom: "20px",
  },
  logo: {
    height: "40px",
  },
  nav: {
    display: "flex",
    flexDirection: "column",
  },
  navItem: {
    display: "flex",
    alignItems: "center",
    padding: "10px 0",
    textDecoration: "none",
    color: "#333",
    fontSize: "16px",
    fontWeight: "500",
    whiteSpace: "nowrap",
  },
  icon: {
    marginRight: "10px",
  },
  toggleButton: {
    position: "absolute",
    top: "20px",
    right: "20px",
    background: "#fff",
    border: "none",
    borderRadius: "50%",
    padding: "10px",
    cursor: "pointer",
    zIndex: 1000,
  },
  toggleIcon: {
    color: "#333",
  },
};
