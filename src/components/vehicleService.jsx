﻿import { useState } from "react";
import VehicleJson from "./vehicleJson";
import { Autocomplete, TextField } from "@mui/material";

function VehicleService() {
    const [inputValue, setInputValue] = useState();

    console.log(inputValue);

    const vehicles = VehicleJson();
    const service = vehicles.map(vehicle => vehicle.service);
    const serviceList = [...new Set(service)];

    const autoArr = [];
    vehicles.map(auto => autoArr.push(auto));
    const uniqueVehicles = autoArr.reduce((accumulator, current) => {
        if (accumulator.findIndex(object => object.id === current.id) === -1) {
            accumulator.push(current);
        }
        return accumulator;
    }, []);

    function CountVehicles(){
        let count = 0;
        uniqueVehicles.map(auto => auto.service === inputValue? count ++ : 0);
        console.log('count- ' + count);
        return count;
    }


    // let resForGosNumber = vehiclesGosNum.map(vehicle => (vehicle.gosNumber === inputValue));
    // setVehiclesObj(resForGosNumber);
    // console.log(vehiclesObj);
    // vehiclesGosNum.map(vehicle => (vehicle.gosNumber === inputValue ? console.log(vehicle) : null));
    // console.log("res" + resForGosNumber);
    // let resultForGosNumber = {};
    // resultForGosNumber = resForGosNumber[0];
    // console.log("result" + resultForGosNumber);
    // resultForGosNumber.map(elem => console.log(elem.model));

    return (
        <div className="radio margin_top">
            <Autocomplete
                disablePortal
                options={serviceList}
                // value={numberAuto}
                onChange={(event, newInputValue) => setInputValue(newInputValue)}
                sx={{ width: 160,
                "& .MuiOutlinedInput-root": {
                color: "white",
                backgroundColor:"#223856",
                fontFamily: "Arial",
                fontWeight: "bold",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#FFC777",
                borderWidth: "2px",
                },
                "& .MuiInputLabel-outlined": {
                color: "#FFC777",
                fontWeight: "bold",
                },
                }}
                color="secondary"
                renderInput={(params) => <TextField {...params} label="Служба" />}
            />
                {/* <div className="cardVehicle">
                    <p>Модель : <span style={{ color: 'white' }}>{resultForGosNumber.model? resultForGosNumber.model : ''}</span></p>
                    <p>Гос.номер : <span style={{ color: 'red' }}>{resultForGosNumber.gosNumber? resultForGosNumber.gosNumber : ''}</span></p>
                    <p>Год выпуска : <span style={{ color: 'white' }}>{resultForGosNumber.release? resultForGosNumber.release : ''}</span></p>
                    <p>Номер гаража : <span style={{ color: 'red' }}>{resultForGosNumber.garageNumber? resultForGosNumber[0].garageNumber : ''}</span></p>
                    <p>Инв.номер : <span style={{ color: 'white' }}>{resultForGosNumber.invNumber? resultForGosNumber.invNumber : ''}</span></p>
                    <p>ВИН номер : <span style={{ color: 'white' }}>{resultForGosNumber.vinNumber? resultForGosNumber.vinNumber : ''}</span></p>
                    <p>Служба : <span style={{ color: 'white' }}>{resultForGosNumber.service? resultForGosNumber.service : ''}</span></p>
                </div> */}
                <div>
                    <p>Всего ТС : <span style={{ color: 'yellow', fontSize: 22 }}>{CountVehicles()}</span></p>
                    <ul>{uniqueVehicles.map((elem) => elem.service === inputValue ? <div className="cardVehicle" key={elem.id}>
                        <p>Модель : <span style={{ color: 'white' }}>{elem.model}</span></p>
                        <p>Гос.номер : <span style={{ color: 'red' }}>{elem.gosNumber}</span></p>
                        <p>Год выпуска : <span style={{ color: 'white' }}>{elem.release}</span></p>
                        <p>Номер гаража : <span style={{ color: 'red' }}>{elem.garageNumber}</span></p>
                        <p>Инв.номер : <span style={{ color: 'white' }}>{elem.invNumber}</span></p>
                        <p>ВИН номер : <span style={{ color: 'white' }}>{elem.vinNumber}</span></p>
                        <p>Служба : <span style={{ color: 'white' }}>{elem.service}</span></p>
                        </div> : <div></div>)}
                    </ul>
                </div>
        </div>
    );
}
export default VehicleService;