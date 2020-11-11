import * as jwt from 'jsonwebtoken';
import { User as UserModel } from '../models/User';

export class JwtService {

    sign(user: UserModel): string {
        return jwt.sign({
            firstName: user.firstName,
            lastName: user.lastName,
        }, process.env.JWT_SECRET, { expiresIn: '12h' })
    }

    verify(token: string) {
        try {
            jwt.verify(token, process.env.JWT_SECRET);
        } catch(err) {
            if (err) {
                return false;
            }
        }

        return true;
    }
}