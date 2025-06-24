import "./all.css";

function Fluids() {

    return (
            <div>
                <div>
                    <img></img>
                    <p className="color2">Моторные масла:</p>
                    <div>
                        <table>
                            <tr>
                                <th>Марка</th>
                                <th>Вязкость</th>
                                <th>Допуск</th>
                                <th>Объем</th>
                            </tr>
                            <tr>
                                <td>Лада Гранта</td>
                                <td>5W30, 5W40</td>
                                <td>по API SL, SM или SN</td>
                                <td>3.5л</td>
                            </tr>
                            <tr>
                                <td>Москвич 3</td>
                                <td>5W30</td>
                                <td>API SP или ILSAC GF-6A </td>
                                <td>4л</td>
                            </tr>
                            <tr>
                                <td>ГАЗ 33213</td>
                                <td>10W40</td>
                                <td>API SG/CD</td>
                                <td>5.8л</td>
                            </tr>
                        </table>
                    </div>
                    <p className="color2">Охлаждающая жидкость:</p>
                    <div>
                        <table>
                            <tr>
                                <th>Марка</th>
                                <th>Цвет</th>
                                <th>Допуск</th>
                                <th>Объём</th>
                            </tr>
                            <tr>
                                <td>Лада Гранта</td>
                                <td>красный</td>
                                <td>G12</td>
                                <td>7.8л</td>
                            </tr>
                            <tr>
                                <td>Москвич 3</td>
                                <td>красный</td>
                                <td>G12/G12+</td>
                                <td>5.6л</td>
                            </tr>
                            <tr>
                                <td>ГАЗ 33213</td>
                                <td>красный</td>
                                <td>G12</td>
                                <td>9.7(11.5)л</td>
                            </tr>
                        </table>
                    </div>
                    <p className="color2">Тормозная житкость:</p>
                    <div>
                        <table>
                            <tr>
                                <th>Марка</th>
                                <th>Допуск</th>
                                <th>Объём</th>
                            </tr>
                            <tr>
                                <td>Лада Гранта</td>
                                <td>DOT 4</td>
                                <td>0.45мл</td>
                            </tr>
                            <tr>
                                <td>Москвич 3</td>
                                <td>DOT 4</td>
                                <td>780мл +/-50</td>
                            </tr>
                            <tr>
                                <td>ГАЗ 33213</td>
                                <td>DOT 4</td>
                                <td>0.650мл</td>
                            </tr>
                        </table>
                    </div>
                    <p className="color2">ГУР</p>
                    <table>
                        <tr>
                            <td>ГАЗ 33213</td>
                            <td>Mobil ATF 220; Dextron IID</td>
                            <td>Объём: 1.5л</td>
                        </tr>
                    </table>
                </div>
            </div>
    );
}

export default Fluids;