import { useLoaderData } from 'react-router-dom';
import AddToCartButton from './AddToCartButton';
import ChangeAmount from './ChangeAmount';
import DataFetch from './DataFetch';
import styles from './Item.module.css';
//1400*700
export default function Item() {
  const { loading, data, error } = DataFetch(
    'https://fakestoreapi.com/products?limit=4'
  );
  const loaderData = useLoaderData();

  console.log(loaderData.id);

  return (
    <>
      {loading && <div>A moment please...</div>}

      {error && (
        <div>{`There is a problem fetching the data - ${error.message}`}</div>
      )}
      {data && (
        <div className={styles.item}>
          <div className={styles.left}>
            <img
              src={data[loaderData.id - 1].image}
              alt=""
              className={styles.image}
            />
          </div>
          <div className={styles.middle}>
            <h1>{data[loaderData.id - 1].title}</h1>
            <h2>{data[loaderData.id - 1].description}</h2>
            <div className={styles.button}>
              <ChangeAmount />
              <AddToCartButton />
            </div>
          </div>
          <div className={styles.right}>
            <p>$ {data[loaderData.id - 1].price.toFixed(2)}</p>
          </div>
        </div>
      )}
    </>
  );
}
