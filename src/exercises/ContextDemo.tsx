import RoleContextProvider, {useRole} from "../components/RoleContentProvider";

const topWidth = 220;
const A = () => {
    return (
        <div className="box" style={{ width: topWidth }}>
            <h2>A</h2>
            <B />
        </div>
    );
}
const B = () => {
    const { role } = useRole();
    return (
        <div className="box" style={{ width: topWidth - 20 }}>
            <h2>B</h2>
            <p>Role: {role}</p>
            <C />
        </div>
    );
}
const C = () => {
    return (
        <div className="box" style={{ width: topWidth - 40 }}>
            <h2>C</h2>
        </div>
    );
}
const D = () => {
    const { role, setRole } = useRole();
    return (
        <div className="box" style={{ width: topWidth }}>
            <h2 style={{ margin: 0 }}>D</h2>
            <p style={{ margin: 0 }}>Simulates a login that provides a role</p>
            <select defaultValue={role} onChange={(evt) => setRole(evt.target.value)}>
                <option value="anonymous">anonymous</option>
                <option value="USER">USER</option>
                <option value="ADMIN">ADMIN</option>
            </select>
            <E />
        </div>
    );
}
const E = () => {
    return (
        <div className="box" style={{ width: topWidth - 20 }}>
            <h2>E</h2>
            <F />
        </div>
    );
}
const F = () => {
    const { role } = useRole();
    return (
        <div className="box" style={{ width: topWidth - 40 }}>
            <h2>F</h2>
            <p>Role: {role}</p>
        </div>
    );
}

const Root = () => {
    const { role } = useRole();
    return (
        <div className="root-box">
            <h2 style={{margin:0}}>Root</h2>
            <p style={{margin:0}}>Role: {role}</p>
            <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
                <A />
                <D />
            </div>
        </div>
    );
}

const ContextDemoApp = ({ title }: BaseProps) => {
    return (
        <>
            <div className="title">{title}</div>
            <RoleContextProvider>
                <Root />
            </RoleContextProvider>
        </>
    );
}

export default ContextDemoApp;
