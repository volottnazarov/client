import { MechanicList } from "./mechanicList";
import "./all.css";
import Fluids from "./fluids";
import { useState } from "react";

function Mechanic() {

    const [viewFluids, setViewFluids] = useState(true);

    const viewDivFluids = viewFluids? '' : 'viewCss';

    const changeViewFluids = () => {
        setViewFluids(!viewFluids);
    }

    return (
        <div>
            <MechanicList />
            <div>
                <p onClick={changeViewFluids} className="hover color1 cursorP">Техническая информация</p>
                <div className={`noView ${viewDivFluids}`}>
                    <Fluids />
                </div>
            </div>
        </div>
    );
}

export default Mechanic;