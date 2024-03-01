import Profile from "../components/Profile";
import { useState } from "react";


const PropsDemo = ({ title }: BaseProps) => {
    const [showHorizontal, setShowHorizontal] = useState(false);
    return (
        <>
            <h2>{title}</h2>
            Direction: <input type="checkbox" checked={showHorizontal} onChange={()=>setShowHorizontal(!showHorizontal)}/>
            <Profile name="Max Power" email="mp@email.com" isActive={true} singleLine={showHorizontal} />
            <Profile name={"John Doe"} email={"JohnDoe@mail.com"} isActive={true} singleLine={showHorizontal} />
            <Profile name={"Jane Doe"} email={"JaneDoemail.com"} isActive={false} singleLine={showHorizontal} />
        </>
    );
}

export default PropsDemo;
