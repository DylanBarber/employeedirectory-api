import { IUserService } from "./IUserService";
import { User as UserModel } from "../models/User";
import { User as UserEntity } from "../entities/User";
import { sequelizeEmp } from "./sequelizeEmp";
import * as bcrypt from 'bcrypt';


export class UserService implements IUserService {

    get(id: number): Promise<UserModel[]> {
        throw new Error("Method not implemented.");
    }

    async create(toCreate: UserModel): Promise<UserModel> {
        
        if (toCreate.id !== null && toCreate.id !== undefined) {
            throw new Error('Id cannot be supplied on create');
        }

        if (toCreate.password === null || toCreate.password === undefined) {
            throw new Error('A new user must have a password');
        }

        toCreate.password = await this.generateHash(toCreate.password);

        const userRepo = sequelizeEmp.getRepository(UserEntity);

        return this.entityToModel(await userRepo.create(toCreate));

    }

    async update(toUpdate: UserModel): Promise<UserModel> {
        
        if (toUpdate.id === null || toUpdate.id === undefined) {
            throw new Error('Id must be supplied on update');
        }

        const userRepo = sequelizeEmp.getRepository(UserEntity);

        const result = await userRepo.findOne({
            where: {
                id: toUpdate.id
            }
        });

        if (result === null) {
            throw new Error(`User ${toUpdate.id} not found!`);
        }

        result.email = toUpdate.email;
        result.firstName = toUpdate.firstName;
        result.lastName = toUpdate.lastName;
        result.active = toUpdate.active;
        
        if (toUpdate.password !== undefined && toUpdate.password !== null) {
            result.password = await this.generateHash(toUpdate.password);
        }

        return this.entityToModel(await result.save());
    }

    async generateHash(password: string): Promise<string> {
        try {
            return await bcrypt.hash(password, 10);
        } catch (err) {
            throw new Error('issue with generating Bcrypt hash');
        }
    }

    async compareHash(password: string, hash: string): Promise<boolean> {
        try {
            return await bcrypt.compare(password, hash);
        } catch (err) {
            throw new Error('issue with comparing Bcrypt hash');
        }
    }

    delete(toDelete: UserModel): Promise<void> {
        throw new Error("Method not implemented.");
    }

    entityToModel(entity: UserEntity): UserModel {
        
        const userModel: UserModel = {
            id: entity.id,
            firstName: entity.firstName,
            lastName: entity.lastName,
            email: entity.email,
            active: entity.active
        }

        return userModel;
    }
    
}