import React from 'react';
import { AdminNav } from '../../components';
import { Link } from 'react-router-dom';

function CourseYear() {
  // Dummy data for demonstration
  const years = [
    { year: '1', icon: 'bi-emoji-laughing', color: 'bg-primary', label: 'Beginner' },
    { year: '2', icon: 'bi-emoji-neutral', color: 'bg-success', label: 'Intermediate' },
    { year: '3', icon: 'bi-emoji-smile', color: 'bg-danger', label: 'Pro' }
  ];

  return (
    <div>
        <AdminNav activeTimetable={"active"}/>
        <main className="mt-5 pt-3">
            <div className="container-fluid">
                <div className="row">
                <div className="col-md-12">
                    <h4>Classes TimeTable</h4>
                </div>
                </div>
                <div className="pb-3">
                <Link to="/classes-admin">
                    <button type="button" name="cid" className="btn btn-outline-success">
                    <i className="bi bi-arrow-left me-2"></i>Courses
                    </button>
                </Link>
                </div>
                <div className="row">
                {years.map((yearData, index) => (
                    <div className="col-md-4 mb-3" key={index}>
                    <div className={`card ${yearData.color} text-white h-100`}>
                        <div className="card-body d-flex flex-column align-items-center justify-content-center">
                        <i className={`bi ${yearData.icon} display-4 mb-3`}></i>
                        <h5 className="card-title h6">YEAR {yearData.year}</h5>
                        </div>
                        <Link to={"/year-group"} className="nav-link text-white">
                        <div className="card-footer d-flex">
                            View Details
                            <span className="ms-auto">
                            <i className="bi bi-chevron-right"></i>
                            </span>
                        </div>
                        </Link>
                    </div>
                    </div>
                ))}
                </div>
            </div>
        </main>
    </div>
    
  );
}

export default CourseYear;
