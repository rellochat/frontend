'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, className, children }: { href: string, className?: string, children: JSX.Element | string }) {
    const asPath = usePathname()
    const isActive = asPath == href;
    return <Link href={href} className={isActive ? className : ""}>{children}</Link>
}