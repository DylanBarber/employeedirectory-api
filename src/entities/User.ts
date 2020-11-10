import {Table, Column, Model, HasMany} from 'sequelize-typescript';
import { BaseEntity } from './BaseEntity';
 
@Table
export class User extends BaseEntity<User> {
 
  @Column
  email: string;
 
  @Column
  firstName: string;

  @Column
  lastName: string;

  @Column
  active: boolean;

  @Column
  password: string;
 
}