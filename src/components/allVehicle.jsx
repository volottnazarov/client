
import VehicleJson from "./vehicleJson";

function AllVehicle() {
    const autos = VehicleJson();

    const autoArr = [];
    autos.map(auto => autoArr.push(auto));
    const uniqueAutos = autoArr.reduce((accumulator, current) => {
        if (accumulator.findIndex(object => object.id === current.id) === -1) {
            accumulator.push(current);
        }
        return accumulator;
    }, []);

    function CountVehicles(){
        let count = 0;
        uniqueAutos.map(auto => auto? count ++ : 0);
        console.log('count- ' + count);
        return count;
    }


    // const changeView = () => {
    //     setView(!view);
    // }
    return (
        <div>
                <p>Всего ТС : <span style={{ color: 'yellow', fontSize: 22 }}>{CountVehicles()}</span></p>
                <ul>{uniqueAutos.map(elem => <div className="cardVehicle" key={elem.id}>
                    <p>Модель : <span style={{ color: 'white' }}>{elem.model}</span></p>
                    <p>Гос.номер : <span style={{ color: 'red' }}>{elem.gosNumber}</span></p>
                    <p>Год выпуска : <span style={{ color: 'white' }}>{elem.release}</span></p>
                    <p>Номер гаража : <span style={{ color: 'red' }}>{elem.garageNumber}</span></p>
                    <p>Инв.номер : <span style={{ color: 'white' }}>{elem.invNumber}</span></p>
                    <p>ВИН номер : <span style={{ color: 'white' }}>{elem.vinNumber}</span></p>
                    <p>Служба : <span style={{ color: 'white' }}>{elem.service}</span></p>
                    </div>)}
                </ul>
        </div>
    );
}


export default AllVehicle;