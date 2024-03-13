import React from 'react';
import { AdminNav } from '../../components';
import { Link } from 'react-router-dom';

const CreateNotice = () => {

  // Dummy function to simulate form submission
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
        <AdminNav activeNotices={"active"}/>
        <main className="mt-5 pt-3">
            <div className="container-fluid">
                <div className="row">
                <div className="col-md-12">
                    <h4>New Notice</h4>
                </div>
                </div>
                <div className="row pb-5">
                <div className="col-md-10 m-auto">
                    <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Create Notice</h5>
                        <Link to="/notice-admin">
                        <button type="button" className="btn btn-outline-success"><i className="bi bi-arrow-left me-2"></i>Notices</button>
                        </Link>
                        <form onSubmit={handleSubmit} className="mt-4">
                        <div className="row mb-3">
                            <label htmlFor="inputText" className="col-sm-2 col-form-label fw-bolder">Notice</label>
                            <div className="col-sm-5">
                            <textarea className="form-control" name="notice_message" rows="3" required></textarea>
                            {/* Error message handling */}
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="inputText" className="col-sm-2 col-form-label fw-bolder">Due Date</label>
                            <div className="col-sm-5">
                            <input type="datetime-local" className="form-control" name="due_date" required />
                            {/* Error message handling */}
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-sm-5 m-auto">
                            <button type="submit" className="btn btn-primary fw-bolder" name="submit">Create Notice</button>
                            </div>
                        </div>
                        </form>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </main>
    </div>
    
  );
};

export default CreateNotice;
