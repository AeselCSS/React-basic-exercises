interface Props {
    name: string,
    email: string,
    isActive: boolean,
    singleLine: boolean
}

const Profile = ({ name, email, isActive, singleLine }: Props) => {
    return (
        <>
            {singleLine && <p>{name} - {email} - {isActive ? "Active" : "Inactive"}</p>}
            {!singleLine && <div>
                <p>Name: {name}</p>
                <p>Email: {email}</p>
                <p>Status: {isActive ? "Active" : "Inactive"}</p>
            </div>}
        </>
    );
}

export default Profile;