import { IEntityService } from "./IEntityService";
import { User as UserModel } from "../models/User";
import { User as UserEntity } from "../entities/User";


export interface IUserService extends IEntityService<UserModel, UserEntity> {
    generateHash(password: string): Promise<string>;
    compareHash(hash: string, password: string): Promise<boolean>;
}