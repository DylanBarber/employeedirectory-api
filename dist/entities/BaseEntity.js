"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const swagger_express_ts_1 = require("swagger-express-ts");
const yup_decorator_1 = require("yup-decorator");
let BaseEntity = class BaseEntity extends sequelize_typescript_1.Model {
};
__decorate([
    swagger_express_ts_1.ApiModelProperty({
        description: "Internal identifier of entity.",
        required: false
    }),
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    sequelize_typescript_1.Column,
    yup_decorator_1.is(yup_decorator_1.a.number()),
    __metadata("design:type", Number)
], BaseEntity.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], BaseEntity.prototype, "deletedAt", void 0);
BaseEntity = __decorate([
    sequelize_typescript_1.Table
], BaseEntity);
exports.BaseEntity = BaseEntity;
//# sourceMappingURL=BaseEntity.js.map