import { useEffect, useState } from "react";

const SERVER_URL = "http://localhost:8000/users";
const DELAY = 1500;

type User = { id: number; name: string };

const fetchUser = async (userId: number, options?: object): Promise<User> => {
    const res = await fetch(`${SERVER_URL}/${userId}?delay=${DELAY}`, options);
    return await res.json();
}

const FetchDemo = ({ title }: BaseProps) => {
    const [userId, setUserId] = useState(1);
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUserData = async () => {
            setLoading(true);
            const theUser = await fetchUser(userId);
            console.log(theUser); // log the response here
            setUser(theUser);
            setLoading(false);
        };
        fetchUserData();
    }, [userId]);

    const fetchNextUser = () => {
        const nextUser = user && user.id ? (user.id + 1 <= 15 ? user.id + 1 : 1) : 1;
        setUserId(nextUser);
    };

    return (
        <>
            <h2>{title}</h2>
            {loading ? 'Loading...' : user && JSON.stringify(user)}
            <br />
            <button onClick={fetchNextUser}>Next User</button>
        </>
    );
}

export default FetchDemo;