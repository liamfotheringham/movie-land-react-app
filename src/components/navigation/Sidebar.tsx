import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/sidebar.css"
// import SearchIcon from "../../assets/search.svg";

const items = [
  {
    title: "Movies",
    path: "/movies"
  },
  {
    title: "Series",
    path: "/series"
  }
]

function Sidebar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  function toggleSidebar() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        <button
          onClick={toggleSidebar}
          className="sidebar-toggle"
        >
          {isOpen ? "<" : ">"}
        </button>
        {/* <img src={SearchIcon} alt="Side bar logo"></img> */}
        <nav>
          {items.map(item => (
            <button key={item.title} onClick={() => { navigate(item.path) }}>{item.title}</button>
          ))}
        </nav>
      </aside>
      <div className="sidebar-order" />
    </>
  )
}

export default Sidebar