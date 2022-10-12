import "./App.css";
import React, { useState } from "react";

import Header from "./Header";
import Portrait from "./Portrait";
import Menu from "./Menu";
import PortraitFeatures from "./PortraitFeatures";

function App() {
    const [face, setFace] = useState("circle");
    const [hair, setHair] = useState("short");
    const [expression, setExpression] = useState("happy");
    const [eye, setEye] = useState("small");

    const [menu, setMenu] = useState("face");

    return (
        <main className="page">
            <Header />
            <Portrait
                face={face}
                hair={hair}
                expression={expression}
                eye={eye}
            />
            <Menu onClick={setMenu} currentMenu={menu} />
            <PortraitFeatures
                type={menu}
                face={face}
                setFace={setFace}
                hair={hair}
                setHair={setHair}
                expression={expression}
                setExpression={setExpression}
                eye={eye}
                setEye={setEye}
            />
        </main>
    );
}

export default App;
