import React from 'react';
import { AdminNav } from '../../components';
import { Link } from 'react-router-dom';

function IndexAdmin() {

  return (
   <div>
    <AdminNav activeDashboard={"active"}/>
    <main className="mt-5 pt-3">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <h4>Dashboard</h4>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-lg-3 col-md-4 mb-3 max-w-280">
            <div className="card bg-primary text-white h-100">
              <div className="card-body d-flex flex-column align-items-center justify-content-center">
                <i className="bi bi-person-fill display-4 mb-3"></i>
                <h5 className="card-title">Administrator Profile</h5>
              </div>
              <Link to="/profile-admin" className="nav-link text-white">
                <div className="card-footer d-flex">
                  View Details
                  <span className="ms-auto">
                    <i className="bi bi-chevron-right"></i>
                  </span>
                </div>
              </Link>
            </div>
          </div>                   
          <div className="col-lg-3 col-md-4 mb-3 max-w-280">
            <div className="card bg-info text-white h-100">
              <div className="card-body d-flex flex-column align-items-center justify-content-center">
                <i className="bi bi-exclamation-diamond-fill display-4 mb-3"></i>
                <h5 className="card-title">Notices</h5>
              </div>
              <Link to="/notice-admin" className="nav-link text-white">
                <div className="card-footer d-flex">
                  View Details
                  <span className="ms-auto">
                    <i className="bi bi-chevron-right"></i>
                  </span>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mb-3 max-w-280">
            <div className="card bg-success text-white h-100">
              <div className="card-body d-flex flex-column align-items-center justify-content-center">
                <i className="bi bi-book display-4 mb-3"></i>
                <h5 className="card-title">Class Timetable</h5>
              </div>
              <Link to="/classes-admin" className="nav-link text-white">
                <div className="card-footer d-flex">
                  View Details
                  <span className="ms-auto">
                    <i className="bi bi-chevron-right"></i>
                  </span>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mb-3 max-w-280">
            <div className="card bg-danger text-white h-100">
              <div className="card-body d-flex flex-column align-items-center justify-content-center">
                <i className="bi bi-box-arrow-right display-4 mb-3"></i>
                <h5 className="card-title">Logout</h5>
              </div>
              <Link to="/" className="nav-link text-white">
                <div className="card-footer d-flex">
                  Here
                  <span className="ms-auto">
                    <i className="bi bi-chevron-right"></i>
                  </span>
                </div>
              </Link>
            </div>
          </div>                 
        </div>
      </div>
    </main>
   </div>
  );
}

export default IndexAdmin;
