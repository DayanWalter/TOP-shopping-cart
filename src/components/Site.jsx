import styles from './Site.module.css';
import Icon from '@mdi/react';
import { mdiShoppingOutline } from '@mdi/js';

import { mdiBat } from '@mdi/js';
import App from './App';
import Home from './Home';
import Shop from './Shop';
import Item from './Item';
import ShoppingCart from './ShoppingCart';

export default function Site() {
  return (
    <div className={styles.site}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Icon path={mdiBat} size="48px" />

          <p>EveryThing</p>
        </div>
        <div className={styles.navigation}>
          <p>Home</p>
          <p>Shop</p>
          <p>Contact</p>
        </div>
        <div className={styles.cart}>
          <Icon
            path={mdiShoppingOutline}
            size="
          48px"
          />
        </div>
      </header>
      <main className={styles.main}>
        <div className={styles.mainContent}>
          <Home />
        </div>
      </main>
      <footer className={styles.footer}>
        <p>Copyright by SynthCyrax</p>
        <i className="devicon-github-original colored"></i>
      </footer>
      <section>{/* <ShoppingCart /> */}</section>
    </div>
  );
}
