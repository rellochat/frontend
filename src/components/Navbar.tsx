import Image from "next/image";
import Link from "next/link";
import NavLink from "./NavLink";

export default function Navbar() {
    return (
        <div className="w-full h-landing-header flex justify-between items-center px-3 sm:px-12">
            <div>
                <Image src={"/landing-banner.png"} draggable={false} width={300} height={60} alt="banner" className="hidden sm:block" />
                <Image src={"/logo.png"} draggable={false} width={60} height={60} alt="logo" className="block sm:hidden" />
            </div>
            <nav className="flex items-center">
                <NavLink href="/support" className="text-accent-primary">Support</NavLink>
                <NavLink href="/blog" className="text-accent-primary">Blog</NavLink>
                <NavLink href="/login" className="text-accent-primary">Login</NavLink>
            </nav>
        </div>
    )
}