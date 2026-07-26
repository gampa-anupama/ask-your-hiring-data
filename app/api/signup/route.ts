import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { hashPassword } from "@/lib/password";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      name,
      email,
      password,
      role,
    } = body;

    if (!name || !email || !password || !role) {
      return NextResponse.json(
        {
          message: "All fields are required.",
        },
        {
          status: 400,
        }
      );
    }

    const existingUser =
      await prisma.user.findUnique({
        where: {
          email,
        },
      });

    if (existingUser) {
      return NextResponse.json(
        {
          message: "User already exists.",
        },
        {
          status: 400,
        }
      );
    }

    const hashed =
      await hashPassword(password);

    await prisma.user.create({
      data: {
        name,
        email,
        password: hashed,
        role,
      },
    });

    return NextResponse.json({
      message: "Account created successfully.",
    });

  } catch (error) {

    console.error(error);

    return NextResponse.json(
      {
        message: "Internal Server Error",
      },
      {
        status: 500,
      }
    );

  }
}