import { getAllProducts, getProductById } from "../../lib/helper";
import Image from "next/image";
import Head from "next/head";

export const getStaticPaths = async () => {
  const products = await getAllProducts();
  const paths = products.map((product) => ({
    params: {
      id: product.id,
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const product = await getProductById(params.id);
  return {
    props: {
      product,
    },
  };
};

export default function ProductPage({ product }) {
  return (
    <div>
      <Head>
        <title>{product.title} | Next-commerce</title>
        <meta charSet="UTF-8" />
        <meta name="description" content="Next commerce" />
        <meta name="author" content="macklark" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Image src={product.image} alt={product.title} width={500} height={550} />
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>{product.price}</p>
    </div>
  );
}
