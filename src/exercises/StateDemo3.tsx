import {getNextId, users as usersFromDB} from "../data/data";
import { useState } from "react";
import UserTable from "../components/UserTable";
import UserForm from "../components/UserForm";

type Props = BaseProps;

const StateDemo3 = ({ title }: Props) => {
    const [users, setUsers] = useState<User[]>(usersFromDB || []);
    //Derived value. No need for a useState here
    const nextId = getNextId(users)

    const onSubmitUser = (newUser: User) => {
        newUser.id = nextId;
        setUsers([...users, newUser]);
        users.push(newUser);
        console.log(users);
    };

    return (
        <>
            <h2>{title}</h2>
            <UserTable users={users}  title={"User Table"}/>
            <UserForm title="Add User" onSubmitUser={onSubmitUser} />
        </>
    );
}

export default StateDemo3;
