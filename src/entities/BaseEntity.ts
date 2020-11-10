import {Model, Column, PrimaryKey, AutoIncrement, Table, Unique} from 'sequelize-typescript';
import { ApiModelProperty } from 'swagger-express-ts';
import { is, a, an, nested, schema } from 'yup-decorator';

@Table
export class BaseEntity<T> extends Model<T> {
    @ApiModelProperty({
        description: "Internal identifier of entity.",
        required: false
    })
    @PrimaryKey
    @AutoIncrement
    @Column
    @is(a.number())
    id?: number;


    @Column deletedAt: Date;
}