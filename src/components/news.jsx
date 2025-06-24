import NewsJson from "./newsJson";

function News() {

    const news = NewsJson();

    return (
        <div>
            <ul>
                {news?.map(elem => (
                    <li key={elem.date}>
                        <div className="newsCard">
                            <div className="fontLucida font18 ">
                                <p className="titleNews">Тема:<span className="color1">{elem.title}</span>. </p>
                                <p className="titleNews">Создана:<span className="color1">{elem.date}</span></p>
                            </div>
                            <p className="line">________________________________ _  _ </p>
                            <div className="font18">{elem.newsText}</div>
                            <p className="unLine">_  _ _____________________________</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default News;