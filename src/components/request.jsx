import { useState } from "react";
import "./all.css";

function Request() {
    
    const [view, setView] = useState(true); //всплывающее окно блока
    const changeView = () => {
        setView(!view);
    }

    const viewDiv = view? '' : 'viewCss';
    return (
        <div>
            <div onClick={changeView} className="hover colorRed">Заявки на ремонт
                <div className={`noView ${viewDiv}`}>Список заявок</div>
            </div>
        </div>
    );
}

export default Request;