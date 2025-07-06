import { useEffect, useState } from "react";

function VehicleJson() {

    const [state, setState] = useState(null);
        const [autos, setAutos] = useState([]);
        let autoArr = [];

        const callBackendAPI = async () => {
            const response = await fetch('https://volottnazarov.github.io/serverGarage/data/dataVehicles.json');
            const body = await response.json();
            body.vehicles.map(elem => autoArr.push(elem))
            setAutos(autoArr);

            if (response.status !== 200) {
                throw Error(body.message)
            }
            return body;
        };

      // получение GET маршрута с сервера Express, который соответствует GET из server.js
        useEffect(() => {
            callBackendAPI()
            .then(res => setState(res.vehicleData))
            .catch(err => console.log(err));
        }, [])
        return autos;
}

export default VehicleJson;