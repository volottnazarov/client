import { Autocomplete, Button, TextField } from "@mui/material";
import { useState } from "react";
import { vehicles } from "../data/dataVehicles";


const RequestForRepairs = () => {
    //Локальное состояние для текста новой заявки на ремонт
    const [text, setText] = useState('');
    const [numberAuto, setNumberAuto] = useState('');

    const vehiclesNumber = vehicles.map(vehicle => vehicle.gosNumber);
    console.log(vehiclesNumber);

    return (
        <div className="request">
            <Autocomplete
                disablePortal
                options={vehiclesNumber}
                // value={numberAuto}
                onChange={(event, newInputValue) => setNumberAuto(newInputValue)}
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
            <div className="request">
                <TextField id="damage" label="Неисправности:" variant="outlined"
                    onChange={(e) => setText(e.target.value)}
                    sx={{ width: 400,
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
                />
                <Button
                sx={{ width: 80,
                    border: 1,
                    color: "brown",
                    background: "#FCF1C4"
                }}
                variant="submit">Готово</Button>
            </div>
        </div>
    );
}

export default RequestForRepairs;