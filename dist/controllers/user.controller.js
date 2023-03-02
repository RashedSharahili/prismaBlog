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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.createUser = exports.getAllUsers = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
// READ
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let users = yield prisma.user.findMany();
    console.log(users);
    res.json(users);
});
exports.getAllUsers = getAllUsers;
// CREATE
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let user = yield prisma.user.create({
        data: {
            email: req.body.email,
            name: req.body.name,
            username: req.body.username
        }
    });
    res.json({ "msg": "user created", "user": user });
});
exports.createUser = createUser;
// UPDATE
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let user = yield prisma.user.update({
        where: {
            id: parseInt(req.params.id)
        },
        data: {
            email: req.body.email,
            name: req.body.name
        }
    });
    res.json({ "msg": "user updated", "user": user });
});
exports.updateUser = updateUser;
// DELETE
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let user = yield prisma.user.delete({
        where: {
            id: parseInt(req.params.id)
        }
    });
    res.json({ "msg": "user deleted", "user": user });
});
exports.deleteUser = deleteUser;
