import { useEffect, useState } from "react";

const UseEffectDemo = ({ title }: BaseProps) => {
    const [count, setCount] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let i: number | null = null;
        if (isRunning) {
            i = setInterval(() => {
                setCount((prev) => prev + 1);
            }, 1000);
        }
        return () => {
            if (i) {
                clearInterval(i);
            }
        };
    }, [isRunning]);

    const toggleRunning = () => {
        setIsRunning(!isRunning);
    };

    return (
        <>
            <h2>{title}</h2>
            <p>{count}</p>
            <button onClick={toggleRunning}>
                {isRunning ? 'Stop' : 'Start'}
            </button>
        </>
    );
}

export default UseEffectDemo;