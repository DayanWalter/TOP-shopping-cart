import styles from './Root.module.css';
import Icon from '@mdi/react';
import { mdiShoppingOutline } from '@mdi/js';

import { mdiBat } from '@mdi/js';
import Home from './Home';
import Shop from './Shop';
import Item from './Item';
import ShoppingCart from './ShoppingCart';
import { Outlet, Link } from 'react-router-dom';
import { useRef, useState } from 'react';

export default function Root() {
  // CHANGE!!!
  const [isOpen, setIsOpen] = useState(true);
  // CHANGE!!!
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
  const [cart, setCart] = useState([]);

  return (
    <div className={styles.site}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Icon path={mdiBat} size="48px" />

          <p>EveryThing</p>
        </div>
        <div className={styles.navigation}>
          <p>
            <Link to={`/home`}>Home</Link>
          </p>
          <p>
            {' '}
            <Link to={`/shop`}>Shop</Link>
          </p>
          <p>
            {' '}
            <Link to={`/contact`}>Contact</Link>
          </p>
        </div>
        <div className={styles.cart}>
          <Icon
            path={mdiShoppingOutline}
            size="
          48px"
            onClick={openModal}
          />
        </div>
      </header>
      <main className={styles.main}>
        <div className={styles.mainContent}>
          <Outlet />
        </div>
      </main>
      <footer className={styles.footer}>
        <p>Copyright by SynthCyrax</p>
        <i className="devicon-github-original colored"></i>
      </footer>
      <section>
        {isOpen && (
          <>
            <ShoppingCart
              modalRef={modalRef}
              handleOverlayClick={handleOverlayClick}
            />
          </>
        )}
      </section>
    </div>
  );
}
