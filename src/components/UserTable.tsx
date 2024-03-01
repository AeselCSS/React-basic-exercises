
interface Props {
    title: string;
    users: User[];
}

const UserTable = ({title, users}: Props) => {
    return (
        <>
            <h2>{title}</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Active</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.isActive ? "Active" : "Not active"}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default UserTable;