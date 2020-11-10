"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelizeEmp_1 = require("./services/sequelizeEmp");
const User_1 = require("./entities/User");
const userTable = sequelizeEmp_1.sequelizeEmp.getRepository(User_1.User);
const testUser = {
    email: 'test@test.com',
    firstName: 'dylan',
    lastName: 'dylan',
    password: 'testPassword',
    active: true,
};
userTable.create(testUser);
//# sourceMappingURL=app.js.map