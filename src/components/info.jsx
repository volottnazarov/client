
import { useState } from "react";
import "./all.css";
import VehicleValue from "./vehicleValue";
import { MechanicList } from "./mechanicList";
import Fluids from "./fluids";


function Info() {
    const [viewInfo, setViewInfo] = useState(true);
    const [viewMechanic, setViewMechanic] = useState(true);
    const [viewFluids, setViewFluids] = useState(true);

    const changeViewInfo = () => {
        setViewInfo(!viewInfo);
    }

    const changeViewMechanic = () => {
        setViewMechanic(!viewMechanic);
    }

    const changeViewFluids = () => {
        setViewFluids(!viewFluids);
    }

    const viewDivInfo = viewInfo? '' : 'viewCss';
    const viewDivMechanic = viewMechanic? '' : 'viewCss';
    const viewDivFluids = viewFluids? '' : 'viewCss';

    return (
        <div>
            <div>
                <p onClick={changeViewInfo} className="hover color1 cursorP">Данные по автомобилю и его расположению</p>
                <div className={`noView ${viewDivInfo}`}>
                    <VehicleValue />
                </div>
            </div>
            <div>
                <p onClick={changeViewMechanic} className="hover color1 cursorP">Механики
                </p>
                <div className={`noView ${viewDivMechanic}`}>
                    <MechanicList />
                </div>
            </div>
            <div>
                <p onClick={changeViewFluids} className="hover color1 cursorP">Жидкости и объёмы применяемые в авто</p>
                <div className={`noView ${viewDivFluids}`}>
                    <Fluids />
                </div>
            </div>
        </div>
    );
}

export default Info;
