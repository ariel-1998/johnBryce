import { UserModel } from "../4-models/UserModel";
import { sign } from "jsonwebtoken";

export function generateToken(user: UserModel) {
  return sign(
    {
      sub: user.idusers,
      username: user.userName,
    },
    user.password,
    { expiresIn: "2h" }
  );
}
