import { useState } from "react";
import "./App.css";
import PropsDemo from "./exercises/PropsDemo.tsx";
import Buttons from "./components/Buttons";
import ListDemo from "./exercises/ListDemo.tsx";
import EventDemo from "./exercises/EventDemo.tsx";
import FormUncontrolled from "./exercises/FormUncontrolled.tsx";
import StateDemo1 from "./exercises/StateDemo1.tsx";
import StateDemo2 from "./exercises/StateDemo2.tsx";
import StateDemo3 from "./exercises/StateDemo3.tsx";
import UseEffectDemo from "./exercises/UseEffectDemo.tsx";
import FetchDemo from "./exercises/FetchDemo.tsx";
import LiftingState from "./exercises/LiftingState.tsx";
import ContextDemo from "./exercises/ContextDemo.tsx";

const App = () => {
    const [selectedView, setSelectedView] = useState("info");

    const handleSelected = (selected: string) => {
        setSelectedView(selected);
    }

    return (
        <>
            <div className="outer-div-style">
                <div className="header-style">
                    <h2>React Exercises</h2>
                </div>
                <div style={{ display: "flex" }}>
                    <div style={{ flex: 1, padding: 10 }}>
                        <Buttons onSelected={handleSelected} />
                    </div>
                    <div className="exercise-style">
                        {selectedView == "info" && <p>All exercises for React day-1</p>}
                        {selectedView == "props1" && <PropsDemo title={"Props Demo"}/>}
                        {selectedView == "list2" && <ListDemo title={"List Demo"}/>}
                        {selectedView == "event3" && <EventDemo title={"Event Demo"}/>}
                        {selectedView == "forms4" && <FormUncontrolled title={"Forms Demo"}/>}
                        {selectedView == "state5" && <StateDemo1 title={"State Demo 1"}/>}
                        {selectedView == "state6" && <StateDemo2 title={"State Demo 2"}/>}
                        {selectedView == "state7" && <StateDemo3 title={"State Demo 3"}/>}
                        {selectedView == "useEffect8" && <UseEffectDemo title={"UseEffect Demo"}/>}
                        {selectedView == "fetch9" && <FetchDemo title={"Fetch Demo"}/>}
                        {selectedView == "liftingState10" && <LiftingState title={"Lifting State Demo"}/>}
                        {selectedView == "useContext11" && <ContextDemo title={"Context Demo"}/>}
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;