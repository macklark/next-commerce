import supabase from "../../../utils/supabaseClient";

// auth0 imports
import { withApiAuthRequired, getSession } from "@auth0/nextjs-auth0";

const getCart = async (req, res) => {
  const { user } = getSession(req);

  try {
    const { data: cart } = await supabase
      .from("cart")
      .select("*")
      .eq("userId", user.name);

    res.status(200).json({
      status: "success",
      cart,
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};

export default withApiAuthRequired(getCart);
