import supabase from "../../../utils/supabaseClient";

const getAll = async (req, res) => {
  try {
    const { data: products } = await supabase.from("products").select("*");

    res.status(200).json({
      status: "success",
      products,
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};

export default getAll;
