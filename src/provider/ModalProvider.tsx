import { ReactNode, createContext, useContext, useEffect, useState } from "react";

const ModalContext = createContext<any>({});

let errorTimeout: NodeJS.Timeout | null = null;

export default function ModalProvider({ children }: { children: ReactNode }) {

    const [error, setError] = useState("");
    const [errorTime, setErrorTime] = useState(0);
    const [errorEndTime, setErrorEndTime] = useState(0);

    console.log(errorEndTime/1000);

    useEffect(() => {

        let timeout2 = setTimeout(() => {
            setErrorTime((prev) => prev -= 1000);
            if (errorTime < 0.5) clearTimeout(timeout2);
        }, 1000);
    }, [errorTime])

    const startError = (error: string, time?: number) => {
        if (errorTimeout) clearTimeout(errorTimeout);
        setError(error);
        setErrorTime(time ? time : 10000);
        setErrorEndTime(time ? time : 10000);

        errorTimeout = setTimeout(() => {
            setError("");
            setErrorTime(0);
            setErrorEndTime(0);
        }, time ? time : 10000);

    };

    return (
        <ModalContext.Provider value={{ startError }}>
            <div>
                {error.length > 0 && (
                    <div
                        style={{
                            position: "absolute",
                            width: "100%",
                            height: "2.5rem",
                            display: "flex",
                            flexDirection: "column",
                            background: "var(--accent-primary)",
                            zIndex: "999",
                        }}
                    >
                        <div
                            style={{
                                width: "100%",
                                height: "2.25rem",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <span>{error}</span>
                        </div>
                        <div
                            style={{
                                height: "0.25rem",
                                width: `${(errorTime / errorEndTime) * 100}%`,
                                background: "white",
                                transition: `width ${(errorEndTime / 2)/1000}s linear`,
                            }}
                        ></div>
                    </div>
                )}
                {children}
            </div>
        </ModalContext.Provider>
    );
}

export const useModal = () => {
    return useContext(ModalContext);
};
