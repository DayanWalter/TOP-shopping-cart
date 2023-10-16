import DataFetch from './DataFetch';

export default function App() {
  const { loading, data, error } = DataFetch(
    'https://fakestoreapi.com/products'
  );

  return (
    <div>
      {loading && <div>A moment please...</div>}

      {error && (
        <div>{`There is a problem fetching the data - ${error.message}`}</div>
      )}
      <ul>
        {data &&
          data.map(({ id, title }) => (
            <li key={id}>
              <h3>{title}</h3>
            </li>
          ))}
      </ul>
    </div>
  );
}
