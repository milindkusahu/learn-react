import React, { useRef } from "react";
import { useClickOutside } from "../../hooks/useClickOutside";

const Modal = ({ isOpen, closeModal }) => {
  const modalRef = useRef();

  useClickOutside(modalRef, closeModal);

  if (!isOpen) {
    return null;
  }

  return (
    <div ref={modalRef} className="modal-container">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis vel eos
        earum explicabo iure aspernatur omnis, a recusandae sit sint! Adipisci
        vero ea ducimus dolorem.
      </p>
      <button onClick={closeModal}>Close</button>
    </div>
  );
};

export default Modal;
