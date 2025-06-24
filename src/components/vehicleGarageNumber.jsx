import { useState } from "react";
import VehicleJson from "./vehicleJson";
import { Autocomplete, TextField } from "@mui/material";

function VehicleGarageNumber() {
    const [inputValue, setInputValue] = useState();

    const vehicles = VehicleJson();
    const garageNum = vehicles.map(vehicle => vehicle.garageNumber);
    const garageNumberList = [...new Set(garageNum)];

    const autoArr = [];
    vehicles.map(auto => autoArr.push(auto));
    const uniqueVehicles = autoArr.reduce((accumulator, current) => {
        if (accumulator.findIndex(object => object.id === current.id) === -1) {
            accumulator.push(current);
        }
        return accumulator;
    }, []);

    return (
        <div className="radio margin_top">
            <Autocomplete
                disablePortal
                options={garageNumberList}
                // value={numberAuto}
                onChange={(event, newInputValue) => setInputValue(newInputValue)}
                sx={{ width: 100,
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
                renderInput={(params) => <TextField {...params} label="Номер гаража" />}
            />
                <div>
                    <ul>{uniqueVehicles.map((elem) => elem.garageNumber === inputValue ? <div className="cardVehicle" key={elem.id}>
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
export default VehicleGarageNumber;