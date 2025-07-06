import { Link } from "react-router-dom";
import { MechanicList } from "./mechanicList";
import "./all.css";
import CalculationFuel from "./calculationFuel";
import { useState } from "react";
// import RequestForRepairs from "./requestForRepairs";

function Driver() {
    const [viewMemo, setViewMemo] = useState(true);
    const [viewPDD, setViewPDD] = useState(true);

    //всплывающее окно блока
    const changeViewMemo = () => {
        setViewMemo(!viewMemo);
    }
    const changeViewPDD = () => {
        setViewPDD(!viewPDD);
    }

    const viewDivMemo = viewMemo? '' : 'viewCss';
    const viewDivPDD = viewPDD? '' : 'viewCss';

    return (
        <div>
            <div>
                <CalculationFuel />
            </div>
            <div>
                <MechanicList />
            </div>
            <div onClick={changeViewMemo} className="hover cursorP color1">Памятка водителю
                <div className={`color3 cursorDef noView ${viewDivMemo}`}>
                    <p>Водитель обязан проверить перед выездом:</p>
                    <div>
                        <ul className="color4">
                            <li>Уровень масла в двигателе</li>
                            <li>Уровень антифриза</li>
                            <li>Уровень тормозной жидкости</li>
                            <li>Давление в шинах</li>
                            <li>Внешние повреждения</li>
                            <li>Путевую документацию</li>
                        </ul>
                    </div>
                </div>
                <div className={`noView ${viewDivMemo}`}>
                    <Link className="colorLink" to={'https://www.manualspdf.ru/lada/granta-sedan-2024/инструкция?p=1'}>Инструкция Лада Гранта 2024</Link>
                </div>
            </div>
            <div onClick={changeViewPDD} className="hover cursorP color1">ПДД
                <Link className={`colorLink noView ${viewDivPDD}`} to={'https://pdd-exam.ru/gibdd-exam/'}>тренажер</Link>
            </div>
        </div>
    );
}

export default Driver;