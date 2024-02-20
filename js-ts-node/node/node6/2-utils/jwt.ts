import jwt from "jsonwebtoken";
import { UserModel } from "../4-models/UserModel";

export function generateToken(user: UserModel) {
    // private key can be also something about the user like password 
    
    const token = jwt.sign({
        "sub": user.id,
        "username": user.username,
        "role": user.role
    }, user.password, { expiresIn: '2h' });
    
    return token;
}