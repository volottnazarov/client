import { useState } from "react";
import VehicleJson from "./vehicleJson";
import { Autocomplete, TextField } from "@mui/material";

function VehicleGosNumber() {
    const [inputValue, setInputValue] = useState();

    console.log(inputValue);

    const vehiclesGosNum = VehicleJson();
    const gosNum = vehiclesGosNum.map(vehicle => vehicle.gosNumber);
    const gosNumberList = [...new Set(gosNum)];

    const autoArr = [];
    vehiclesGosNum.map(auto => autoArr.push(auto));
    const uniqueVehiclesGosNum = autoArr.reduce((accumulator, current) => {
        if (accumulator.findIndex(object => object.id === current.id) === -1) {
            accumulator.push(current);
        }
        return accumulator;
    }, []);


    return (
        <div className="radio margin_top">
            <Autocomplete
                disablePortal
                options={gosNumberList}
                // value={numberAuto}
                onChange={(event, newInputValue) => setInputValue(newInputValue)}
                sx={{ width: 120,
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
                renderInput={(params) => <TextField {...params} label="Госномер" />}
            />
                <div>
                    <ul>{uniqueVehiclesGosNum.map((elem) => elem.gosNumber === inputValue ? <div className="cardVehicle" key={elem.id}>
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

export default VehicleGosNumber;