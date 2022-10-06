"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = exports.create = exports.login = void 0;
const userModel_1 = __importDefault(require("../model/userModel"));
const jwt_simple_1 = __importDefault(require("jwt-simple"));
const secret = process.env.JWT_SECRET;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const isAUser = yield userModel_1.default.findOne({ email }).collation({
            locale: 'en_US',
            strength: 2
        });
        if (!isAUser)
            throw new Error('this user does not exist, create an account');
        const verified = isAUser.password === password;
        if (!verified)
            throw new Error('this is the wrong password');
        const userPublicInfo = {
            firstName: isAUser.firstName,
            lastName: isAUser.lastName,
            email: isAUser.email,
            position: isAUser.position,
            workSpace: isAUser.workSpace,
            id: isAUser._id
        };
        const encodedInformation = jwt_simple_1.default.encode(userPublicInfo, secret);
        res.cookie('userInformation', encodedInformation);
        res.send({ ok: true, userId: isAUser._id });
    }
    catch (error) {
        console.error(error.message);
        res.send({ ok: false, error: error.message });
    }
});
exports.login = login;
function create(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { email, password, firstName, lastName, position, workSpace } = req.body;
            const newUserInformation = {
                email,
                password,
                firstName,
                lastName,
                position,
                workSpace
            };
            if (!newUserInformation)
                throw new Error('no newUser in create - userCont');
            const isAUser = yield userModel_1.default.findOne({ email }).collation({
                locale: 'en_US',
                strength: 2
            });
            if (isAUser)
                throw new Error(`a user under ${email} already exists`);
            const newUser = new userModel_1.default(newUserInformation);
            const userInformation = yield newUser.save();
            const newUserPublicInfo = {
                email,
                firstName,
                lastName,
                position,
                workSpace,
                id: userInformation._id
            };
            const encodedInformation = jwt_simple_1.default.encode(newUserPublicInfo, secret);
            res.cookie('userInformation', encodedInformation);
            res.send({ ok: true });
        }
        catch (error) {
            console.error(error.message);
            res.send({ ok: false, error: error.message });
        }
    });
}
exports.create = create;
function getUsers(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.body;
            if (!id) {
                const userList = yield userModel_1.default.find({}, { password: 0 });
                if (!userList)
                    throw new Error("did'nt find the user list in getUsers -userCont");
                res.send({ ok: true, userList: userList });
            }
            if (id) {
                const thisUser = yield userModel_1.default.findById(id, { password: 0 });
                if (!thisUser) {
                    throw new Error("did'nt find a user in getUsers -userCont");
                }
                res.send({ ok: true, thisUser: thisUser });
            }
        }
        catch (error) {
            console.log(error);
            res.send({ ok: false, error: error.message });
        }
    });
}
exports.getUsers = getUsers;
//# sourceMappingURL=userCont.js.map