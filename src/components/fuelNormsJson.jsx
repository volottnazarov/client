import { useEffect, useState } from "react";

function FuelNormsJson() {

    const [state, setState] = useState(null);
    const [norms, setNorms] = useState([]);
    let normsArr = [];

    const callBackendFuelAPI = async () => {
        const response = await fetch('/fuel');
        const normsNotes = await response.json();
        normsNotes.map(elem => normsArr.push(elem))
        setNorms(normsArr);

        if (response.status !== 200) {
            throw Error(normsNotes.message)
        }
        return normsNotes;
    };

      // получение GET маршрута с сервера Express, который соответствует GET из server.js
        useEffect(() => {
            callBackendFuelAPI()
            .then(res => setState(res.fuelNormsData))
            .catch(err => console.log(err));
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [])
        return norms;
}

export default FuelNormsJson;