'use client';
import NavBody from "@/components/NavBody";
import Navbar from "@/components/Navbar";
import Button from "@/components/util/Button";
import { useModal } from "@/provider/ModalProvider";
import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";

export default function Register() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const { startError } = useModal();

    useEffect(() => {
        document.querySelectorAll("input").forEach((item) => {
            setTimeout(() => {
                item.removeAttribute("readonly");
            }, 500);
        })
    })

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        fetch("/api/auth/register", { method: "POST", body: JSON.stringify({ email, password, confirmPassword }) }).then(async (res) => {
            const data = await res.json();
            if(data.code === 401) startError(data.message, 5000);
        })
    }

    return (
        <div className='w-screen h-screen'>
            <div className="sm:block hidden">
                <Navbar />
            </div>
            <NavBody>
                <div className="absolute sm:relative w-full h-full flex justify-center items-center">
                    <div className="w-full h-full sm:w-[500px] sm:h-[425px] bg-secondary sm:rounded-xl px-4 py-2">
                        <h1 className="text-center">Register</h1>
                        <p className="text-center text-secondary font-bold">Create an account to begin!</p>
                        <form className="w-full h-fit flex flex-col items-center mt-4" onSubmit={(event) => handleSubmit(event)}>
                            <label className="font-bold text-secondary w-2/3">EMAIL</label>
                            <input readOnly={true} type="text" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Enter your email here" className="input w-2/3 px-2 py-1.5 outline-none rounded-md" />
                            <label className="font-bold text-secondary w-2/3 mt-5">PASSWORD</label>
                            <input readOnly={true} type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="********" className="input w-2/3 px-2 py-1.5 outline-none rounded-md" />
                            <label className="font-bold text-secondary w-2/3 mt-5">CONFIRM PASSWORD</label>
                            <input readOnly={true} type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="********" className="input w-2/3 px-2 py-1.5 outline-none rounded-md" />
                            <Button className="accent-primary w-1/3 rounded-md mt-4">Register</Button>
                            <Link className="font-bold link w-fit text-sm mt-3" href={"/login"}>Have an account already?</Link>
                        </form>
                    </div>
                </div>
            </NavBody>
        </div>
    )
}