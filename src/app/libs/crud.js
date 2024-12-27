"use server";
import { PrismaClient } from "@prisma/client";
export const createUser = async () => {
  try {
    const prisma = new PrismaClient();
    const newUser = {
      email: "tester@gmail.com",
      name: "user test 1",
    };

    const createdUser = await prisma.user.create({
      data: newUser,
    });
    console.log("Created user: ", createdUser);
  } catch (error) {
    console.log(error);
  }
};
