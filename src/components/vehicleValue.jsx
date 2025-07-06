import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import AllVehicle from "./allVehicle";
import VehicleGosNumber from "./vehicleGosNumber";
import VehicleVINNumber from "./vehicleVINNumber";
import VehicleInvNumber from "./vehicleInvNumber";
import VehicleGarageNumber from "./vehicleGarageNumber";
import VehicleRelease from "./vehicleRelease";
import VehicleService from "./vehicleService";


function VehicleValue() {
    const [selectValue, setSelectValue] = useState('');

    const [viewAll, setViewAll] = useState(true);
    const [viewGosNum, setViewGosNum] = useState(true);
    const [viewVinNum, setViewVinNum] = useState(true);
    const [viewInvNum, setViewInvNum] = useState(true);
    const [viewGarageNum, setViewGarageNum] = useState(true);
    const [viewRelease, setViewRelease] = useState(true);
    const [viewService, setViewService] = useState(true);
    const viewDivAll = viewAll? '' : 'viewCss';
    const viewDivGosNum = viewGosNum? '' : 'viewCss';
    const viewDivVinNum = viewVinNum? '' : 'viewCss';
    const viewDivInvNum = viewInvNum? '' : 'viewCss';
    const viewDivGarageNum = viewGarageNum? '' : 'viewCss';
    const viewDivRelease = viewRelease? '' : 'viewCss';
    const viewDivService = viewService? '' : 'viewCss';

    const handleChange = (event) => {
        setSelectValue(event.target.value);
        switch (event.target.value) {
            case "all":
                setViewAll(false);
                setViewGosNum(true);
                setViewVinNum(true);
                setViewInvNum(true);
                setViewGarageNum(true);
                setViewRelease(true);
                setViewService(true);
                break;
            case "gosNumber":
                setViewAll(true);
                setViewGosNum(false);
                setViewVinNum(true);
                setViewInvNum(true);
                setViewGarageNum(true);
                setViewRelease(true);
                setViewService(true);
                break;
            case "vinNumber":
                setViewAll(true);
                setViewGosNum(true);
                setViewVinNum(false);
                setViewInvNum(true);
                setViewGarageNum(true);
                setViewRelease(true);
                setViewService(true);
                break;
            case "invNumber":
                setViewAll(true);
                setViewGosNum(true);
                setViewVinNum(true);
                setViewInvNum(false);
                setViewGarageNum(true);
                setViewRelease(true);
                setViewService(true);
                break;
            case "garageNumber":
                setViewAll(true);
                setViewGosNum(true);
                setViewVinNum(true);
                setViewInvNum(true);
                setViewGarageNum(false);
                setViewRelease(true);
                setViewService(true);
                break;
            case "release":
                setViewAll(true);
                setViewGosNum(true);
                setViewVinNum(true);
                setViewInvNum(true);
                setViewGarageNum(true);
                setViewRelease(false);
                setViewService(true);
                break;
            case "service":
                setViewAll(true);
                setViewGosNum(true);
                setViewVinNum(true);
                setViewInvNum(true);
                setViewGarageNum(true);
                setViewRelease(true);
                setViewService(false);
                break;
            default:
                break;
        }
    };


    return (
        <div>
            <div>
                <h4>Данные по ТС:</h4>
            </div>
            {/* <div onChange={HandleSelect(selectValue)} className="request"> */}
            <div onChange={handleChange} className="request">
            <Box sx={{ width: 220,
                "& .MuiOutlinedInput-root": {
                    color: "white",
                    backgroundColor:"#223856",
                    fontFamily: "Arial",
                    fontWeight: "bold",
                    }}}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label" style={ {color: "gold"} }>Выберите</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={selectValue}
                        label="Выберите"
                        onChange={handleChange}
                    >
                        <MenuItem value={'all'}>Показать все ТС</MenuItem>
                        <MenuItem value={'gosNumber'}>По госномеру</MenuItem>
                        <MenuItem value={'garageNumber'}>По номеру гаража</MenuItem>
                        <MenuItem value={'invNumber'}>По инв. номеру</MenuItem>
                        <MenuItem value={'vinNumber'}>По VIN номеру</MenuItem>
                        <MenuItem value={'release'}>По году выпуска</MenuItem>
                        <MenuItem value={'service'}>По службе</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            </div>
            <div className={`noView ${viewDivAll}`}>
                <AllVehicle />
            </div>
            <div className={`noView ${viewDivGosNum}`}>
                <VehicleGosNumber />
            </div>
            <div className={`noView ${viewDivVinNum}`}>
                <VehicleVINNumber />
            </div>
            <div className={`noView ${viewDivInvNum}`}>
                <VehicleInvNumber />
            </div>
            <div className={`noView ${viewDivGarageNum}`}>
                <VehicleGarageNumber />
            </div>
            <div className={`noView ${viewDivRelease}`}>
                <VehicleRelease />
            </div>
            <div className={`noView ${viewDivService}`}>
                <VehicleService />
            </div>
        </div>
    );
}

export default VehicleValue;