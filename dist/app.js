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
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
// sync
// async
const CreateUser = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let user = yield prisma.user.create({
            data: {
                email: "rashed7@gmail.com",
                name: "rashed7",
                username: "rashed7",
                courses: {
                    create: [
                        { name: "HTML" },
                        { name: "CSS" }
                    ]
                }
            },
        });
        console.log(`user created successfully`);
    }
    catch (err) {
        console.log(err);
    }
});
// CreateUser();
const UpdateUser = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let user = yield prisma.user.update({
            where: {
                id: 2,
            },
            data: {
                name: "Rashed Sharahili"
            }
        });
        console.log(`user updated successfully`);
    }
    catch (err) {
        console.log(err);
    }
});
// UpdateUser();
const DeleteUser = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let user = yield prisma.user.delete({
            where: {
                id: 1,
            }
        });
        console.log(`user deleted successfully`);
    }
    catch (err) {
        console.log(err);
    }
});
// DeleteUser();
const GetAllUser = () => __awaiter(void 0, void 0, void 0, function* () {
    let user = yield prisma.user.findMany({
        // take: 2,
        // select: {
        //     id: true,
        //     email: true
        // },
        include: { courses: true }
    });
    console.log(`Get All Users: `);
    try {
        user.forEach((user) => {
            console.log(`id: ${user.id} email: ${user.email}`);
        });
        user.map((course) => {
            console.log(course);
        });
    }
    catch (err) {
        console.log(err);
    }
});
GetAllUser();
const CreateCourse = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let course = yield prisma.course.create({
            data: {
                name: "PHP",
                userId: 1,
            }
        });
        console.log(`course created successfully`);
    }
    catch (err) {
        console.log(err);
    }
});
// CreateCourse()
const GetAllCourse = () => __awaiter(void 0, void 0, void 0, function* () {
    let course = yield prisma.course.findMany({
        include: { user: true }
    });
    console.log(`Get All Courses: `);
    try {
        course.forEach((course) => {
            console.log(`id: ${course.id} name: ${course.name} ${course.user.name}`);
        });
    }
    catch (err) {
        console.log(err);
    }
});
GetAllCourse();
