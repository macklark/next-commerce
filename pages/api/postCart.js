// Supabase imports
import supabase from "../../utils/supabaseClient";

const postCart = async (req, res) => {
  if (req.method === "POST") {
    const name = req.body.name;
    const userId = req.body.user;
    const size = req.body.size;
    const quantity = req.body.quantity;
    const totalPrice = req.body.totalPrice;

    const { data, error } = await supabase
      .from("cart")
      .insert([
        {
          name: name,
          size: size,
          quantity: quantity,
          userId: userId,
          price: totalPrice,
        },
      ]);

    if (data) {
      res.status(200).json({
        status: "success",
        data,
        message: "Cart item added successfully",
      });
    }

    if (error) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  }
};

export default postCart;
