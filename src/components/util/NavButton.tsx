'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavButton({ href, children }: { href: string, children: JSX.Element | string }) {
    const asPath = usePathname()
    const isActive = asPath == href;
    return (
        <div className={`w-fit h-fit px-4 py-2 select-none ${isActive ? "accent-primary" : "accent-secondary"} brightness-100 hover:duration-500 active:duration-750 hover:brightness-75 hover:scale-95 active:scale-90`}>
            <Link href={href} draggable={false}>{children}</Link>
        </div>
    )
}