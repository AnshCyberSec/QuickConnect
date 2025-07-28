import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { createPortal } from "react-dom";

function Modal({ onClose, isOpen, children }) {
    return createPortal(
    <div>
    {isOpen && (
        <div 
            className="grid place-items-center absolute top-0 left-0 z-40 h-screen w-screen backdrop-blur bg-black/30">
        <div className="m-auto relative z-50 min-h-[200px] min-w-[80%] bg-white p-4 rounded-lg cursor-pointer">
            <div className="flex justify-end">
            <AiOutlineClose onClick={onClose} className="self-end text-2xl" />
            </div>
            {children}
        </div>
        
        </div>
    )}
    </div>,

    document.getElementById("modal-root"));
};

export default Modal;
