import supabase from "../../../utils/supabaseClient";

//auth0 imports
import { withApiAuthRequired, getSession } from "@auth0/nextjs-auth0";

const getAll = async (req, res) => {
  const { user } = getSession(req);

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

export default withApiAuthRequired(getAll);
