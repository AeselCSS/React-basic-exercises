import UserForm from "../components/UserForm";
import { useState } from "react";

 const FormUncontrolled = ({ title }: BaseProps) => {
    const [submittedUser, setSubmittedUser] = useState<User | null>();
    
    const onSubmitUser = (newUser: User) => {
        setSubmittedUser(newUser);
    };

    return (
        <><div style={{backgroundColor:"yellow"}}>
            <h2>{title}</h2>
            <div style={{backgroundColor:"lightblue",margin:20}}>
                <UserForm title="User Form Uncontrolled" onSubmitUser={onSubmitUser} />
            </div>
            <p>{JSON.stringify(submittedUser)}</p>
        </div>
        </>
    );
}

export default FormUncontrolled;
