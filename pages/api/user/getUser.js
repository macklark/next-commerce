import { requireSession } from "@clerk/nextjs/api";

export default requireSession((req, res) => {
  res.statusCode = 200;
  res.json({ id: req.session.userId });
});
