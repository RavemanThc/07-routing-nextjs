"use client";

import { useEffect, type ReactNode } from "react";
import { createPortal } from "react-dom";
import css from "./Modal.module.css";

interface ModalProps {
  children: ReactNode;
  onClose: () => void;
}

export default function Modal({ children, onClose }: ModalProps) {
  // ✅ lock scroll
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  // ESC handler
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  // click handler with type
  const handleBackdropClick = (): void => {
    onClose();
  };

  const stopPropagation = (e: React.MouseEvent<HTMLDivElement>): void => {
    e.stopPropagation();
  };

  return createPortal(
    <div className={css.backdrop} onClick={handleBackdropClick}>
      <div className={css.modal} onClick={stopPropagation}>
        {children}
      </div>
    </div>,
    document.body
  );
}