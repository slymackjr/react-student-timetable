import React from 'react';
import { AdminNav } from '../../components';
import { Link } from 'react-router-dom';

const ClassAdmin = () => {
  // Dummy data with special colors for each course
  const courses = [
    { course: 'BAC', icon: 'bi-calculator-fill', color: 'primary' },
    { course: 'BTX', icon: 'bi-file-bar-graph', color: 'success' },
    { course: 'BEF', icon: 'bi-briefcase', color: 'danger' },
    { course: 'BAIT', icon: 'bi-person-fill', color: 'secondary' },
    { course: 'BIT', icon: 'bi-laptop', color: 'dark' },
    { course: 'BAS', icon: 'bi-person-fill', color: 'info' },
    { course: 'BCS', icon: 'bi-laptop', color: 'warning' },
    { course: 'BIRM', icon: 'bi-person-fill', color: 'primary' },
    { course: 'BBF', icon: 'bi-cash', color: 'success' },
    { course: 'BSP', icon: 'bi-shield-fill', color: 'danger' },
    { course: 'BDCS', icon: 'bi-lock-fill', color: 'secondary' }
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
                <div className="row d-flex justify-content-center">
                {courses.map((course, index) => (
                    <div key={index} className="col-lg-3 col-md-4 mb-3 max-w-280">
                    <div className={`card bg-${course.color} text-white h-100`}>
                        <div className="card-body d-flex flex-column align-items-center justify-content-center">
                        <i className={`bi ${course.icon} display-4 mb-3`}></i>
                        <h5 className="card-title h6">{course.course}</h5>
                        </div>
                        <Link to={"/course-year"} className="nav-link text-white">
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
};

export default ClassAdmin;
