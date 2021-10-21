// import { passwordHasher } from "../../../lib/hasher";
// import { databaseConnection } from "../../../lib/helper";

// async function signUp(req, res) {
//   if (req.method === "POST") {
//     const data = req.body;
//     const { username, email, password } = data;

//     if (
//       !email ||
//       !email.includes("@") ||
//       !password ||
//       password.trim().length < 7
//     ) {
//       return res.status(400).json({
//         message: "Invalid email or password",
//       });
//     }

//     const client = await databaseConnection();

//     const db = client.db();

//     const existingUser = await db.collection("users").findOne({ email: email });

//     if (existingUser) {
//       res.status(400).json({
//         message: "User already exists",
//       });
//       client.close();
//       return;
//     }

//     const hashPassword = await passwordHasher(password);

//     const result = await db.collection("users").insertOne({
//       username,
//       email,
//       hashPassword,
//     });

//     res.status(201).json({
//       message: "User created successfully",
//     });
//     client.close();
//   }
// }

// export default signUp;
