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

// const exampleCart = [
//   {
//     id: 0,
//     amount: 2,
//     item: 'Mens Cotton Jacket',
//     price: 55.99,
//   },
//   {
//     id: 1,
//     amount: 5,
//     item: 'Mens Casual Premium Slim Fit T-Shirts ',
//     price: 22.3,
//   },
// ];

export default function Root() {
  // CHANGE!!!
  const [isOpen, setIsOpen] = useState(false);
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

  function handleRemoveItem(itemId) {
    return setCart(cart.filter((e) => e.id !== itemId));
  }

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
          <p className={styles.cartlength}>{cart.length}</p>

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
          <Outlet context={[cart, setCart]} />
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
              cart={cart}
              handleRemoveItem={handleRemoveItem}
            />
          </>
        )}
      </section>
    </div>
  );
}
