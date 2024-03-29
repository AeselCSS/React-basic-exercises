import "./liftingState.css"
import { users as usersDB, getNextId } from "../data/data";
import { useState } from "react";
import UserTableWithButtons from "../components/UserTableWithButtons";
import UserFormControlled, { AddEditDeleteFunction } from "../components/UserFormControlled";

const LiftingState = ({ title }: BaseProps) => {
    const [users, setUsers] = useState(usersDB);
    const [userToEdit, setUserToEdit] = useState<User | undefined>(undefined);

    const addEditDeleteUser: AddEditDeleteFunction = (user, isDelete) => {
        setUsers((usersArr) => {
            // if isDelete is true, remove the user from the users array
            if (isDelete) return usersArr.filter((u) => u.id !== user.id);
            // if the user has an id, update the user in the users array
            if (user.id) return usersArr.map((u) => (u.id === user.id ? user : u));
            // if the user does not have an id, add the user to the users array
            return [...usersArr, { ...user, id: getNextId(usersArr) }];
        });
        // set userToEdit to undefined in order to reset the form to its initial state
        setUserToEdit(undefined);
    };

    const editUser = (id: number) => {
        const user = users.find((user) => user.id === id);
        setUserToEdit(user);
    };

    return (
        <>
            <h2>{title}</h2>
            <div className="outer">
                <h2 style={{ margin: 0 }}>Root Component</h2>
                <p style={{ margin: 0 }}>
                    This is where ALL the users live (Single Source of truth).{" "}
                    <em>User Count:</em> <b>{users.length}</b>
                </p>
                <p><em>User To Edit:</em> <b>{JSON.stringify(userToEdit)}</b></p>


                <div className="outer-user-table">
                    <div className="user-table">
                        <UserTableWithButtons users={users} editUser={editUser} />
                    </div>
                    <div className="user-form">
                        <UserFormControlled
                            title="Add User"
                            onSubmitUser={addEditDeleteUser}
                            defaultUser={userToEdit}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default LiftingState;