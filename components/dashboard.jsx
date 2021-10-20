import { useState } from "react";

function Dashboard({ products }) {
  const [productsList, updateProductsList] = useState(products);
  return (
    <>
      {productsList.map((product) => {
        return (
          <div key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
          </div>
        );
      })}
    </>
  );
}

export default Dashboard;
