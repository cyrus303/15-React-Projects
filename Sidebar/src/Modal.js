import React, { useContext } from 'react';
import { FaTimes } from 'react-icons/fa';
import { AppContext } from './context';
const Modal = () => {
  const data = useContext(AppContext);
  console.log(data);
  return (
    <div className={`modal-overlay `}>
      <div className="modal-container">
        <h3>modal content</h3>
        <button className="close-modal-btn">
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Modal;
