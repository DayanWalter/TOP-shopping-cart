import Card from './Card';
import DataFetch from './DataFetch';
import styles from './Home.module.css';
//1400*700
export default function Home() {
  const { loading, data, error } = DataFetch(
    'https://fakestoreapi.com/products?limit=1'
  );

  return (
    <>
      {loading && <div>A moment please...</div>}

      {error && (
        <div>{`There is a problem fetching the data - ${error.message}`}</div>
      )}
      {data && (
        <div className={styles.home}>
          <div className={styles.left}>
            <h1>Explore the World of Shopping with Us!</h1>
            <h2>Quality, Diversity, and Service Combined in Our Webshop</h2>
            <button>Shop</button>
          </div>
          <div className={styles.right}>
            {data.map(({ title, id, image, price }) => (
              <li key={id}>
                <Card title={title} image={image} price={price} />
              </li>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
