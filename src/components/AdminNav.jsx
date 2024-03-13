import React from 'react';
import { Link } from 'react-router-dom';

const AdminNav = ({activeDashboard,activeNotices,activeProfile,activeTimetable}) => {
    const defaultClasses = "";
  return (
    <>
      {/* top navigation bar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#sidebar" aria-controls="offcanvasExample">
            <span className="navbar-toggler-icon" data-bs-target="#sidebar"></span>
          </button>
          <Link className="navbar-brand me-auto ms-lg-0 ms-3 text-uppercase fw-bold" to="/index-admin">Student TimeTable</Link>
          {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#topNavBar" aria-controls="topNavBar" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button> */}
          <div className="collapse navbar-collapse" id="topNavBar">
            <form className="d-flex ms-auto my-3 my-lg-0">
              <div className="input-group">
                {/* <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-primary" type="submit"><i className="bi bi-search"></i></button> */}
              </div>
            </form>
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle me-2" role="button" data-bs-toggle="dropdown" aria-expanded="false">Admin<i className="bi bi-person-fill"></i></Link>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li><Link className="dropdown-item" to="/profile-admin">admin@example.com</Link></li>
                  <li>
                    <Link className="dropdown-item" to="/">Logout</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>    
      {/* top navigation bar */}
      {/* offcanvas */}
      <div className="offcanvas offcanvas-start sidebar-nav bg-dark" tabIndex="-1" id="sidebar">
        <div className="offcanvas-body p-0">
          <nav className="navbar-dark">
            <ul className="navbar-nav">
              <li>
                <div className="text-muted small fw-bold text-uppercase px-3">CORE</div>
              </li>
              <li>
                <Link to="/index-admin" className={`nav-link px-3 ${activeDashboard || defaultClasses}`}>
                  <span className="me-2"><i className="bi bi-speedometer2"></i></span>
                  <span>Dashboard</span>
                </Link>
              </li>
              <li className="my-4"><hr className="dropdown-divider bg-light" /></li>
              <li>
                <div className="text-muted small fw-bold text-uppercase px-3 mb-3">Interface</div>
              </li>
              <li>
                <Link to="/classes-admin" className={`nav-link px-3 ${activeTimetable || defaultClasses}`}>
                  <span className="me-2"> <i className="bi bi-book"></i></span>
                  <span>Classes Timetable</span>
                </Link>
              </li>
              <li>
                <Link to="/notice-admin" className={`nav-link px-3 ${activeNotices|| defaultClasses}`}>
                  <span className="me-2"> <i className="bi bi-file-earmark-text"></i></span>
                  <span>Notices</span>
                </Link>
              </li>
              <li className="my-4"><hr className="dropdown-divider bg-light" /></li>
              <li>
                <div className="text-muted small fw-bold text-uppercase px-3 mb-3">
                  Addons
                </div>
              </li>
              <li>
                <Link to="/profile-admin" className={`nav-link px-3 ${activeProfile || defaultClasses}`}>
                  <span className="me-2"><i className="bi bi-person-fill"></i></span>
                  <span>Profile</span>
                </Link>
              </li>
              <li>
                <Link to="/" className="nav-link px-3">
                  <span className="me-2"><i className="bi bi-box-arrow-right"></i></span>
                  <span>Logout</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      {/* offcanvas */}
    </>
  );
};

export default AdminNav;
