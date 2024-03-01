import { useState, ChangeEvent } from "react";

const StateDemo2 = ({ title }: BaseProps) => {
    const [user, setUser] = useState<User>({
        id: 1,
        name: "Max Power",
        email: "max.power@email.com",
        isActive: true,
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void  => {
        const { name, value, checked } = e.target;
        // If the name of the input is "isActive", then the value is a boolean
        // Otherwise, the value is a string, and we can use it as is
        setUser({ ...user, [name]: name === "isActive" ? checked : value });
    }

    return (
        <>
            <h2>{title}</h2>
            <div>
                <p>ID: {user.id}</p>{" "}
            </div>
            First Name: <input name="name" value={user.name} onChange={handleChange} />
            Email: <input name="email" value={user.email} onChange={handleChange}/>
            Active: <input type="checkbox" checked={user.isActive} onChange={handleChange} name="isActive" />
            <p style={{ marginTop: 15 }}> {JSON.stringify(user)} </p>
        </>
    );
}

export default StateDemo2;