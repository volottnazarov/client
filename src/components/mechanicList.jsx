import { useState } from "react";
// import { mechanicData } from "../mechanics";
import "./all.css";
import MechanicsJson from "./mechanicsJson";


export const MechanicList = () => {

    const mechanicData = MechanicsJson();

    const [mechanic, setMechanic] = useState('^ ВЫБРАТЬ ^');
    const [view, setView] = useState(true); //всплывающее окно блока
    // что сейчас
    var now = new Date();
    // сколько полных часов
    var hour = now.getHours();
    // номер дня с начала года
    const dayNewYear = new Date(now.getFullYear(), 0, 0); //31-12-2024 00:00 начало нового года
    const diff = now - dayNewYear;
    const dayOne = 1000 * 60 * 60 * 24;
    const dayYear = Math.floor(diff / dayOne); //номер дня с начала года

    const cycle = 4; //сутки через трое
    let dutyDay = dayYear % cycle;


    const changeView = () => {
        setView(!view);
    }
    const viewDiv = view? '' : 'viewCss';

    function mechanicMan(number){
        let resultArr;
        mechanicData.map(mech => (mech.id === number)?
            resultArr = (mech.post + ': ' + mech.surname + ' ' +  mech.name) : "Отсутствуют данные");
        return resultArr;
    }

    const mechMan = mechanicMan(dutyDay);
    const mechManTomorrow = mechanicMan(dutyDay + 1);
    let resultDutyDay = (dutyDay === 0 | dutyDay === 1)? 4: dutyDay - 1;
    const mechManYesterday = mechanicMan(resultDutyDay);

    const mechanicArr = [];
    mechanicData.map(mech => mechanicArr.push(mech));
    const uniqueMechanicList = mechanicArr.reduce((accumulator, current) => {
        if (accumulator.findIndex(object => object.id === current.id) === -1) {
            accumulator.push(current);
        }
        return accumulator;
    }, []);

    return (
        <div>
            <div onClick={changeView} className="hover cursorP color1">Дежурный по ремзоне:</div>
            <div className={`noView ${viewDiv}`}>
                <button className="cursorP" onClick={() => setMechanic(mechManYesterday)}>Механик вчера</button>
                <button className="cursorP" onClick={() => setMechanic(mechMan)}>Механик сегодня</button>
                <button className="cursorP" onClick={() => setMechanic(mechManTomorrow)}>Механик завтра</button>
                <h3>{mechanic}</h3>
                <div className="cardMech">
                    <ul className="cardMechanic">{uniqueMechanicList.map(item =>
                        <li key={item.id} className="cardVehicle">
                            <div>{item.name}</div>
                            <div>{item.surname}</div>
                            <div>Тел: {item.phone}</div>
                        </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
}
