'use client'
import { MouseEvent } from "react";

export default function Button({ className, children, onClick }: { className?: string, children: JSX.Element | string, onClick?: CallableFunction }) {
    return (
        <button onClick={(event) => onClick ? onClick(event) : null} className={"px-4 py-2 select-none brightness-100 hover:duration-500 active:duration-750 hover:brightness-75 hover:scale-95 active:scale-90 " + className}>
            {children}
        </button>
    )
}