import { IUserService } from "./IUserService";
import { User as UserModel } from "../models/User";
import { User as UserEntity } from "../entities/User";
import { sequelizeEmp } from "./sequelizeEmp";


export class UserService implements IUserService {

    get(id: number): Promise<UserModel[]> {
        throw new Error("Method not implemented.");
    }

    async create(toCreate: UserModel): Promise<UserModel> {
        
        if (toCreate.id !== null && toCreate.id !== undefined) {
            throw new Error('Id cannot be supplied on create');
        }

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
        result.password = toUpdate.password;

        return this.entityToModel(await result.save());
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
            password: entity.password,
            active: entity.active
        }
        
        return userModel;
    }
    
}