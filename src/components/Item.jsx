import { useLoaderData } from 'react-router-dom';
import AddToCartButton from './AddToCartButton';
import ChangeAmount from './ChangeAmount';
import DataFetch from './DataFetch';
import styles from './Item.module.css';
import { useState } from 'react';
import { useOutletContext } from 'react-router-dom';

//1400*700
let nextId = 2;

export default function Item() {
  const { loading, data, error } = DataFetch(
    'https://fakestoreapi.com/products?limit=4'
  );
  const loaderData = useLoaderData();

  const itemId = loaderData.id - 1;

  const [amount, setAmount] = useState(0);

  function handleIncrement() {
    setAmount((prevAmount) => {
      return (prevAmount += 1);
    });
  }

  function handleDecrement() {
    setAmount((prevAmount) => {
      if (prevAmount > 0) {
        return (prevAmount -= 1);
      } else {
        return (prevAmount = 0);
      }
    });
  }

  const [cart, setCart] = useOutletContext();

  function handleSetOrder() {
    return setCart([
      ...cart,
      {
        id: nextId++,
        item: data[itemId].title,
        amount: amount,
        price: data[itemId].price,
        image: data[itemId].image,
      },
    ]);
  }

  return (
    <>
      {loading && <div>A moment please...</div>}

      {error && (
        <div>{`There is a problem fetching the data - ${error.message}`}</div>
      )}
      {data && (
        <div className={styles.item}>
          <div className={styles.left}>
            <img src={data[itemId].image} alt="" className={styles.image} />
          </div>
          <div className={styles.middle}>
            <h1>{data[itemId].title}</h1>
            <h2>{data[itemId].description}</h2>
            <div className={styles.button}>
              <ChangeAmount
                amount={amount}
                increment={handleIncrement}
                decrement={handleDecrement}
              />
              <AddToCartButton amount={amount} addOrder={handleSetOrder} />
            </div>
          </div>
          <div className={styles.right}>
            <p>$ {data[itemId].price.toFixed(2)}</p>
          </div>
        </div>
      )}
    </>
  );
}
