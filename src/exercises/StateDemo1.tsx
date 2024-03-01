import { useState} from "react";


const StateDemo1 = ({ title }: BaseProps) => {
    const [count, setCount] = useState(0);
    return (
        <>
            <h2>{title}</h2>
            <button onClick={() => {setCount((count) => count + 1)}}>Increment</button>
            <button onClick={() => {setCount((count) => count - 1)}}> Decrement</button>
            <h3>{count}</h3>
        </>
    );
}

export default StateDemo1;
