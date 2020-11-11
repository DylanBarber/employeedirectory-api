import {Table, Column, Model, HasMany} from 'sequelize-typescript';
 
@Table
export class User {
    
    id?: number;

    email: string;

    firstName: string;

    lastName: string;

    active: boolean;

    password?: string;

    deletedAt?: Date;
}