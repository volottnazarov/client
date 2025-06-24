import { MechanicList } from "./mechanicList";
import "./all.css";
import Request from "./request";


function Mechanic() {
    return (
        <div>
            <MechanicList />
            <Request />
            <div>
                <p>Техническая информация</p>
            </div>
        </div>
    );
}

export default Mechanic;