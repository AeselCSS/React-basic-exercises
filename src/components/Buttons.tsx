
interface ButtonProps {
    onSelected: (value: string) => void;
    btnStyle?: string;
}

const Buttons = ({onSelected}: ButtonProps) => {
    return (
        <>
            <button className="btn-w100" onClick={() => onSelected("info")}>
                Info
            </button>

            <button className="btn-w100" onClick={() => onSelected("props1")}>
                Props demo
            </button>

            <button className="btn-w100" onClick={() => onSelected("list2")}>
                List demo
            </button>

            <button className="btn-w100" onClick={() => onSelected("event3")}>
                Event demo
            </button>

            <button className="btn-w100" onClick={() => onSelected("forms4")}>
                Forms demo
            </button>

            <button className="btn-w100" onClick={() => onSelected("state5")}>
                State demo 1
            </button>

            <button className="btn-w100" onClick={() => onSelected("state6")}>
                State demo 2
            </button>

            <button className="btn-w100" onClick={() => onSelected("state7")}>
                State demo 3
            </button>

            <button className="btn-w100" onClick={() => onSelected("useEffect8")}>
                useEffect demo
            </button>

            <button className="btn-w100" onClick={() => onSelected("fetch9")}>
                Fetch demo
            </button>

            <button className="btn-w100" onClick={() => onSelected("liftingState10")}>
                Lifting state demo
            </button>

            <button className="btn-w100" onClick={() => onSelected("useContext11")}>
                Context demo
            </button>
        </>
    );
};

export default Buttons;