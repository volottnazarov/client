import { useEffect, useState } from "react";

function MechanicsJson() {

    const [state, setState] = useState(null);
        const [mech, setMech] = useState([]);
        let mechanicsArr = [];

        const callBackendAPI = async () => {
            const response = await fetch('https://volottnazarov.github.io/serverGarage/data/mechanics.json');
            const mechanics = await response.json();
            console.log(mechanics);
            mechanics.mechanics.map(elem => mechanicsArr.push(elem));
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