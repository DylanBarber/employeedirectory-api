import { IEntityService } from "./IEntityService";
import { User as UserModel } from "../models/User";
import { User as UserEntity } from "../entities/User";


export interface IUserService extends IEntityService<UserModel, UserEntity> {

}