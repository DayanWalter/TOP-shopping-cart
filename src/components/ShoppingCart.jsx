import { useRef, useState } from 'react';
import styles from './ShoppingCart.module.css';

export default function ShoppingCart() {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef();

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  const handleOverlayClick = (e) => {
    if (e.target === modalRef.current) {
      closeModal();
    }
  };

  return (
    <>
      <button onClick={openModal}>Modal öffnen</button>
      {isOpen && (
        <>
          <div
            className={styles.overlay}
            ref={modalRef}
            onClick={handleOverlayClick}
          ></div>
          <div className={styles.content}>
            <h1>Cart</h1>
            <p>Inhalt des Modals</p>
            <button onClick={closeModal}>Modal schließen</button>
          </div>
        </>
      )}
    </>
  );
}
