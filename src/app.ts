import * as dotenv from 'dotenv';
import { User } from './models/User';
import { JwtService } from './services/JwtService';
dotenv.config();

const jwtService = new JwtService();

const testUser: User = {
    firstName: 'test',
    lastName: 'test',
    email: 'test',
    password: 'test',
    active: true
}

console.log(jwtService.verify(jwtService.sign(testUser)));