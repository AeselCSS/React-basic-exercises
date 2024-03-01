import { FormEvent, useRef } from "react";

type UserFormProps = BaseProps & {
    onSubmitUser: (user: User) => void;
};

const UserForm = ({ title, onSubmitUser }: UserFormProps) => {
    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const isActiveRef = useRef<HTMLInputElement>(null);

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const user = {
            name: nameRef.current?.value,
            email: emailRef.current?.value,
            isActive: isActiveRef.current?.checked
        };
        onSubmitUser(user as User);
    };

    return (
        <>
            <h2>{title}</h2>
            <form onSubmit={onSubmit}>
                First Name: <input name="name" ref={nameRef} />
                Email: <input name="email" ref={emailRef} />
                Active: <input type="checkbox" name="isActive" ref={isActiveRef} />
                <button type="submit">Add User</button>
            </form>
        </>
    );
}

export default UserForm;