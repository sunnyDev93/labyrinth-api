import User from "../models/user.model.js";

export async function getUserOrCreate(username, password) {
  let user = await findOne({ username });

  if (!user) {
    user = new User({ username, password });
    await user.save();
  }

  return user;
}

export async function authenticateUser(username, password) {
  const user = await findOne({ username });
  if (!user) return false;

  const isMatch = await user.comparePassword(password);
  return isMatch ? user : false;
}
