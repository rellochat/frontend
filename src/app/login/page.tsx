'use client';
import NavBody from "@/components/NavBody";
import Navbar from "@/components/Navbar";
import Button from "@/components/util/Button";
import Link from "next/link";

export default function Login() {
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
                        <div className="w-full h-fit flex flex-col items-center mt-4">
                            <label className="font-bold text-secondary w-2/3">EMAIL</label>
                            <input placeholder="Enter your email here" className="input w-2/3 px-2 py-1.5 outline-none rounded-md" />
                            <div className="w-full h-5" />
                            <label className="font-bold text-secondary w-2/3">PASSWORD</label>
                            <input placeholder="********" className="input w-2/3 px-2 py-1.5 outline-none rounded-md" />
                            {/* <button className="accent-primary w-1/3 p-2 rounded-md mt-4">Login</button> */}
                            <Button onClick={() => console.log("Hello!")} className="accent-primary w-1/3 rounded-md mt-4">Login</Button>
                            <Link className="font-bold link w-fit text-sm mt-3" href={"/register"}>New to Rello?</Link>
                            <Link className="font-bold link w-fit text-sm mt-0.5" href={"/forgot-pass"}>Forgot your password?</Link>
                        </div>
                    </div>
                </div>
            </NavBody>
        </div>
    )
}