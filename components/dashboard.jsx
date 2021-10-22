export default function Dashboard({ products }) {
  return (
    <>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <p>{product.title}</p>
            <p>{product.description}</p>
            <p>{product.price}</p>
          </div>
        );
      })}
    </>
  );
}
