import { UserModel } from "../4-models/UserModel";
import jwt from 'jsonwebtoken'

export function generateToken(user: UserModel) {
    const token = jwt.sign({
        "sub": user.id,
        "username": user.username,
        "email": user.email
    }, user.password, {expiresIn: '2h'});
    
    return token;
}