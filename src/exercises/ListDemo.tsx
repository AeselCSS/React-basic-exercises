
import { users } from "../data/data";
import UserTable from "../components/UserTable.tsx";

type Props = BaseProps;

const ListDemo = ({ title }: Props) => {
    return (
            <UserTable users={users}  title={title}/>
    );
}

export default ListDemo;