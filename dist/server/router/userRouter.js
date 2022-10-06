"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const userCont_1 = require("../controller/userCont");
router
    .post("/login", userCont_1.login)
    .post('/add-user', userCont_1.create)
    .post('/get-users', userCont_1.getUsers);
exports.default = router;
//# sourceMappingURL=userRouter.js.map