// Supabase imports
import supabase from "../../utils/supabaseClient";

// Getting all products
import { getAllProducts } from "../../utils/helper";

export const getStaticPaths = async () => {
  const res = await getAllProducts();

  const paths = res.map((product) => {
    return {
      params: { id: product.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  let { data: product, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", params.id);

  if (error) {
    return {
      props: {
        error: error.message,
      },
    };
  }

  return {
    props: {
      product,
    },
  };
};

const Details = ({ product }) => {
  return (
    <div>
      <h1>Details</h1>
    </div>
  );
};

export default Details;
