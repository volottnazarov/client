import { useState } from "react";
import { Switch, FormGroup, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import "./all.css";
import FuelNormsJson from "./fuelNormsJson";

function CalculationFuel() {
    const [view, setView] = useState(true);
    const [season, setSeason] = useState(true);
    const [odometer, setOdometer] = useState(true);
    const [odometer100, setOdometer100] = useState(false);
    const [odometer150, setOdometer150] = useState(false);
    const [conditioner, setConditioner] = useState(true);
    const [modGranta, setModGranta] = useState(false);
    const [modMoskvitch, setModMoskvitch] = useState(false);
    const [modGaz, setModGaz] = useState(false);
    const [value, setValue] = useState(100);

    const fuelNormJson = FuelNormsJson();
    let fuelNorm = fuelNormJson[0];
    const normValue = [];
    for (const key in fuelNorm) {
            normValue.push(fuelNorm[key])
        }

    /*
Базовые нормы расхода бензина на 100км по маркам автомобилей,
без корректирующих коэффициентов(кондиционер, зима/лето и тд).
*/
    const fuelNormGranta = normValue[0];     // базовый расход Лада Гранта
    const fuelNormGaz = normValue[1];       // базовый расход Газель
    const fuelNormMoskvitch = normValue[2];  // базовый расход Москвич

/*
Корректирующие коэф-ты
*/
    const regionFuel = normValue[3];        // надбавка за регион(более 5млн. человек) 35%
    const winterSeasonFuel = normValue[4];         // надбавка зимний сезон 10%
    const odometer100kmFuel = normValue[5]  // надбавка за пробег выше 100т.км, но меньше 150т.км. 5%
    const odometer150kmFuel = normValue[6]  // надбавка за пробег выше 150т.км, 10%
    const conditionFuel = normValue[7]      // надбавка за польз-е кондиционером в летний сезон 7%

    //всплывающее окно блока
    const changeView = () => {
        setView(!view);
    }

    const viewDiv = view? '' : 'viewCss';

    function ModelGranta() {
        modGranta ? (setModGaz(false) || setModGranta(false) || setModMoskvitch(false)) : (setModGranta(true) || setModGaz(false) || setModMoskvitch(false)) ;
    }

    function ModelMoskvitch() {
        modMoskvitch ? (setModGaz(false) || setModGranta(false) || setModMoskvitch(false)) : (setModMoskvitch(true) || setModGaz(false) || setModGranta(false));
    }

    function ModelGaz() {
        modGaz ? (setModGaz(false) || setModGranta(false) || setModMoskvitch(false)) : (setModGaz(true) || setModGranta(false) || setModMoskvitch(false));
    }

    function SeasonToggle(event) {
        return event.target && season ? setSeason(false) : setSeason(true);
    }

    function Odometer(event) {
        return event.target && odometer ? setOdometer(false)  : (setOdometer(true) || setOdometer100(false) || setOdometer150(false));
    }

    function Odometer100(event) {
        return event.target && odometer100 ? setOdometer100(false) : (setOdometer100(true) || setOdometer(false) || setOdometer150(false));
    }

    function Odometer150(event) {
        return event.target && odometer150 ? setOdometer150(false) : (setOdometer150(true) || setOdometer(false) || setOdometer100(false));
    }

    function Conditioner(event) {
        return event.target && conditioner ? setConditioner(false) : setConditioner(true);
    }

    function Sun() {
        return(
            <div className="toggleSeason">
                <div className="summerIcon"></div>
                <p className="summer">Лето</p>
            </div>
        )
    }

    function Winter() {
        return(
            <div className="toggleSeason">
                <div className="winterIcon"></div>
                <p>Зима</p>
            </div>
        )
    }

    function FuelFlow() {
        let result = 0;
        let fuelNorm = 0;
        let seasonCorrect = 0;
        let odometerCorrect = 0;
        let odometer100Correct = 0;
        let odometer150Correct = 0;
        let conditionCorrect = 0;

        fuelNorm = modGranta? fuelNormGranta : fuelNorm;
        fuelNorm = modGaz? fuelNormGaz : fuelNorm;
        fuelNorm = modMoskvitch? fuelNormMoskvitch : fuelNorm;

        seasonCorrect = !season? winterSeasonFuel : 0;
        odometer100Correct = odometer100? odometer100kmFuel : 0;
        odometer150Correct = odometer150? odometer150kmFuel : 0;
        conditionCorrect = conditioner? conditionFuel : 0;
        console.log(fuelNorm, regionFuel, seasonCorrect, odometerCorrect, odometer100Correct ,odometer150Correct, conditionCorrect);

        result = (fuelNorm + fuelNorm * (regionFuel + seasonCorrect + odometerCorrect + odometer100Correct + odometer150Correct + conditionCorrect)) / 100 * value;

        return result.toFixed(2);
    }

    let FuelFlowResult = FuelFlow();


    return (
        <div>
            <div onClick={changeView} className="hover cursorP color1">Расчет расхода топлива</div>
            <div className={`noView ${viewDiv}`}>
                <p className="color1 cursorDef">Выбирете параметры</p>
                <div className="calcFuel">
                    <FormGroup>
                        <div className={(modMoskvitch || modGaz)? "noView" : "viewCss"}>
                            <FormControlLabel onChange={ModelGranta} className={modGranta? "color3" : ""} control={<Switch />} label="Лада Гранта" />
                        </div>
                        <div className={(modGranta || modGaz)? "noView" : "viewCss"}>
                            <FormControlLabel onChange={ModelMoskvitch} className={modMoskvitch? "color3" : ""} control={<Switch />} label="Москвич" />
                        </div>
                        <div className={(modGranta || modMoskvitch)? "noView" : "viewCss"}>
                            <FormControlLabel onChange={ModelGaz} className={modGaz ? "color3" : ""} control={<Switch />} label="Газель" />
                        </div>
                        <div className="radio">
                            <p>Пробег:</p>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="odometer"
                                name="radio-buttons-group"
                            >
                                <FormControlLabel onChange={Odometer} value="odometer" control={<Radio />} label="До 100т.км" />
                                <FormControlLabel onChange={Odometer100} value="odometer100" control={<Radio />} label="От 100 до 150т.км" />
                                <FormControlLabel onChange={Odometer150} value="odometer150" control={<Radio />} label="Свыше 150т.км" />
                            </RadioGroup>
                        </div>
                        <FormControlLabel onChange={Conditioner} control={<Switch defaultChecked />} label={conditioner? "С кондиционером" : "Без кондиционера"} />
                        <div className="toggleSeason">
                            <FormControlLabel className={season? "summer" : "winter"} onChange={SeasonToggle} control={<Switch defaultChecked />} /><span>{season? Sun() : Winter()}</span>
                        </div>
                    </FormGroup>
                </div>
                <div className="toggleSeason">
                    <form>
                        <label>
                            Пробег за смену:
                            <input
                                className="input"
                                value={value}
                                onChange={(e) => setValue(e.target.value)}
                            />
                        </label>
                    </form>
                    <p>Результат<span className="resFuel">{FuelFlowResult}</span>л.</p>
                </div>
            </div>
        </div>
    );
}

export default CalculationFuel;