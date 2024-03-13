import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for routing
import { lable } from '../assets';

function Home() {
  return (
    <div id="intro-example" className="p-5 text-center bg-image align-items-center">
      <section>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-9">
              <div className="card text-black" style={{ borderRadius: '25px' }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-8 order-2 order-lg-2">      
                      <p className="text-center h1 fw-bold mt-2">Welcome to student timetable management system.</p>
                      <div id="intro-example" className="p-2 text-center bg-image">
                        <div className="mask">
                          <div className="d-flex justify-content-center align-items-center h-100">
                            <div className="text-black">
                              <Link to="/login-staff" className="btn btn-outline-dark btn-lg m-2" role="button" rel="nofollow">Login Staff</Link>
                              <Link to="/login-student" className="btn btn-outline-dark btn-lg m-2" role="button">Login student</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-1">
                      <Link to="/home">
                        <img src={lable} className="img-fluid rounded-4 w-50" alt="Sample image" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
