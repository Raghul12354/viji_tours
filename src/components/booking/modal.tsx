"use client";

import { useState } from "react";
import CloseIcon from "../Icons/CloseIcon";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOverlayClick = (e: any) => {
    if (e.target.classList.contains("overlay")) {
      handleClose();
    }
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-20">
          <div
            className="overlay fixed inset-0 bg-black bg-opacity-70"
            onClick={handleOverlayClick}
          ></div>
          <div className="bg-white mx-5 rounded-md p-8 relative w-1/2 h-1/2 flex flex-col justify-center text-center">
            <button className="absolute top-3 right-3" onClick={handleClose}>
              <CloseIcon classProp="text-green-500 w-8 h-8 hover:text-green-600" />
            </button>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800 capitalize">
              Your form has been submitted successfully.
            </h2>
            <p className="pt-5 text-gray-700 md:text-lg text-base font-medium">
              Our team is ready to help you right away. You&apos;ll hear from us
              soon!
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;