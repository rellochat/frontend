export default function NavBody({ children }: { children: JSX.Element }) {

    return (
        <div className="w-full h-[calc(100vh-5rem)]">
            {children}
        </div>
    )
}