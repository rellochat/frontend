import Validation from "@/util/Validation";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

dotenv.config();

mongoose.connect(process.env.MONGO_URI!);

export async function POST(request: Request) {
    const { email, password } = await request.json();

    const emailValidation = Validation.email(email);
    const passwordValidation = Validation.password(password);

    if (emailValidation.code !== 200) return NextResponse.json(emailValidation);
    if (passwordValidation.code !== 200) return NextResponse.json(passwordValidation);

    await mongoose.disconnect();
    
    return NextResponse.json({ message: "Hello World!" });
}