'use client';
import NavBody from "@/components/NavBody";
import Navbar from "@/components/Navbar";
import Button from "@/components/util/Button";
import Link from "next/link";
import { FormEvent, useState } from "react";

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        fetch("/api/auth/login", { method: "POST", body: JSON.stringify({ email, password }) }).then(async (res) => {
            console.log(await res.json());
        })
    }

    return (
        <div className='w-screen h-screen'>
            <div className="sm:block hidden">
                <Navbar />
            </div>
            <NavBody>
                <div className="absolute sm:relative w-full h-full flex justify-center items-center">
                    <div className="w-full h-full sm:w-[500px] sm:h-[360px] bg-secondary sm:rounded-xl px-4 py-2">
                        <h1 className="text-center">Login</h1>
                        <p className="text-center text-secondary font-bold">Login to start chatting!</p>
                        <form className="w-full h-fit flex flex-col items-center mt-4" onSubmit={(event) => handleSubmit(event)}>
                            <label className="font-bold text-secondary w-2/3">EMAIL</label>
                            <input type="text" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Enter your email here" className="input w-2/3 px-2 py-1.5 outline-none rounded-md" />
                            <div className="w-full h-5" />
                            <label className="font-bold text-secondary w-2/3">PASSWORD</label>
                            <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="********" className="input w-2/3 px-2 py-1.5 outline-none rounded-md" />
                            <Button className="accent-primary w-1/3 rounded-md mt-4">Login</Button>
                            <Link className="font-bold link w-fit text-sm mt-3" href={"/register"}>New to Rello?</Link>
                            <Link className="font-bold link w-fit text-sm mt-0.5" href={"/forgot-pass"}>Forgot your password?</Link>
                        </form>
                    </div>
                </div>
            </NavBody>
        </div>
    )
}