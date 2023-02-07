import React from "react";



function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div className="headerFooter">
    <h1 className="text-center">
      Tim Hanna
    </h1>
<div className="d-flex justify-content-center">
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#aboutme"
          onClick={() => handlePageChange("Aboutme")}
          className={currentPage === "Aboutme" ? "nav-link active" : "nav-link"}
        >
          About Me
        </a>
      </li>

      <li className="nav-item">
        <a
          href="#portfolio"
          onClick={() => handlePageChange("Portfolio")}
          className={
            currentPage === "Portfolio" ? "nav-link active" : "nav-link"
          }
        >
          Portfolio
        </a>
      </li>

      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange("Contact")}
          className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </a>
      </li>

      <li className="nav-item">
        <a
          href="#resume"
          onClick={() => handlePageChange("Resume")}
          className={currentPage === "Resume" ? "nav-link active" : "nav-link"}
        >
          Resume
        </a>
      </li>
    </ul>
    </div>
    </div>
  );
}

export default NavTabs;
