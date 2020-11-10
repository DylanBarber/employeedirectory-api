"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const dotenv = __importStar(require("dotenv"));
dotenv.config();
exports.sequelizeEmp = new sequelize_typescript_1.Sequelize({
    database: 'employeedirectory',
    dialect: 'mysql',
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    storage: ':memory:',
    models: [__dirname + '/../entities/**/*.ts'],
    repositoryMode: true,
});
//# sourceMappingURL=sequelizeEmp.js.map