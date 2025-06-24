import "./all.css";
// import FuelNorms from "./fuelNorms";
import News from "./news";

function HomePage() {
    return (
        <div>
            <p className="color1 font16">Главная страница</p>
            <h1 className="title color2">GARAGE SYSTEM</h1>
            <div className="icons">
                <div className="garageIcon"></div>
                <div className="serviceIcon"></div>
                <div className="infoIcon"></div>
            </div>
            <div>
                <News />
            </div>
        </div>
    );
}

export default HomePage;