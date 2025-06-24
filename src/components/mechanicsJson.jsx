import { useEffect, useState } from "react";

function MechanicsJson() {

    const [state, setState] = useState(null);
        const [mech, setMech] = useState([]);
        let mechanicsArr = [];

        const callBackendAPI = async () => {
            const response = await fetch('/mechanics');
            const mechanics = await response.json();
            mechanics.map(elem => mechanicsArr.push(elem))
            setMech(mechanicsArr);

            if (response.status !== 200) {
                throw Error(mechanics.message)
            }
            return mechanics;
        };

      // получение GET маршрута с сервера Express, который соответствует GET из server.js
        useEffect(() => {
            callBackendAPI()
            .then(res => setState(res.mechanicsData))
            .catch(err => console.log(err));
        }, [])
        return mech;
}

export default MechanicsJson;