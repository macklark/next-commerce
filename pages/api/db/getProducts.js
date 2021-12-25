import client from "../../../utils/supabaseClient";

const getProducts = async (req, res) => {
  try {
    const { data: products } = await client.from("products").select("*");

    res.status(200).json({
      products: products,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export default getProducts;
