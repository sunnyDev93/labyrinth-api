import {
  authenticateUser,
  getUserOrCreate,
} from "../controllers/user.controller.js";

export default async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader) return res.status(401).send("No authentication provided.");

  const auth = Buffer.from(authHeader.split(" ")[1], "base64")
    .toString("ascii")
    .split(":");
  const username = auth[0];
  const password = auth[1];

  const user = await authenticateUser(username, password);
  if (!user) {
    const newUser = await getUserOrCreate(username, password);
    req.user = newUser;
  } else {
    req.user = user;
  }

  next();
};
