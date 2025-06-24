import { useEffect, useState } from "react";

function VehicleJson() {

    const [state, setState] = useState(null);
        const [autos, setAutos] = useState([]);
        let autoArr = [];

        const callBackendAPI = async () => {
            const response = await fetch('/vehicles');
            const body = await response.json();
            console.log('Body:', body);
            body.map(elem => autoArr.push(elem))
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