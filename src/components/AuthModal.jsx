import React from 'react';

const AuthModal = ({ visible, onClose }) => {
  if (!visible) return null;
  return (
    <div className="modal fade show d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Login / Signup</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <input type="email" className="form-control mb-3" placeholder="Email" />
            <input type="password" className="form-control mb-3" placeholder="Password" />
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>Cancel</button>
            <button type="button" className="btn btn-primary">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;