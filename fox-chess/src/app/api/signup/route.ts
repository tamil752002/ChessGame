import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import connectDB from "@/lib/db/mongodb";
import User from "@/models/userModel";
import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.JWT_SECRET as string;

export async function POST(req: Request) {
  try {
    await connectDB();

    const { name, email, password } = await req.json();

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ message: "User already exists" }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    // Generate JWT Token
    const token = jwt.sign({ userId: newUser._id, email }, SECRET_KEY, { expiresIn: "1h" });

    return NextResponse.json({ message: "User registered successfully", token ,StatusCode:1 }, { status: 201 });
  } catch (error) {
    console.error("Error in signup API:", error);
    return NextResponse.json({ message: "Internal Server Error",StatusCode:0 }, { status: 500 });
  }
}