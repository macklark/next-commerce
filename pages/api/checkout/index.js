import Stripe from "stripe";

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === "POST") {
    const arrCart = req.body.items;

    try {
      const session = await stripe.checkout.sessions.create({
        line_items: arrCart,
        mode: "payment",
        success_url:
          "https://71d0-2405-201-c01b-500c-f4e1-bd31-5be3-bd0c.ngrok.io/payment/success",
        cancel_url:
          "https://71d0-2405-201-c01b-500c-f4e1-bd31-5be3-bd0c.ngrok.io/payment/cancel",
      });

      res.status(200).json(session);
      //   res.redirect(303, session.url);
    } catch (err) {
      res.status(500).json({
        message: err.message,
      });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).json({ message: "Method not allowed" });
  }
}
