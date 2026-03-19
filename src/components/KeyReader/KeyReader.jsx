import React, { useEffect, useMemo, useState } from "react";



const useAnyKey = () => {
    const [key, setKey] = useState(null);
    useEffect(() => {
        const handleKeyDown = (event) => {
            setKey(event);
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);
    return key;
};

export default function KeyReader() {
    const key = useAnyKey();
    return <h1>{key?.key}</h1>;
}