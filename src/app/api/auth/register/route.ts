import Validation from "@/util/Validation";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

dotenv.config();

mongoose.connect(process.env.MONGO_URI!);

export async function POST(request: Request) {
    const { email, password, confirmPassword } = await request.json();

    const emailValidation = Validation.email(email);
    const passwordValidation = Validation.password(password, true);

    if (emailValidation.code !== 200) return NextResponse.json(emailValidation);
    if (passwordValidation.code !== 200) return NextResponse.json(passwordValidation);

    if (!confirmPassword || confirmPassword !== password) return NextResponse.json({ code: 401, message: "Passwords must match." });

    return NextResponse.json({ message: "Hello World!" });
}