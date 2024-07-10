import React, { ReactNode, useState, useEffect } from "react";
import ReactDOM from "react-dom";

interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
}

export default function Modal({ children, isOpen }: ModalProps) {
  const [elementModal, setElementModal] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setElementModal(document.getElementById("modal"));
  }, []);

  if (!elementModal || !isOpen) return null;

  return ReactDOM.createPortal(
    <>
      <section className="top-0 bottom-0 left-0 right-0 bg-slate-600 bg-opacity-80 fixed z-[1000]">
        {children}
      </section>
    </>,
    elementModal
  );
}
