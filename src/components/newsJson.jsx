import { useEffect, useState } from "react";

function NewsJson() {

    const [state, setState] = useState(null);
        const [news, setNews] = useState([]);
        let newsArr = [];

        const callBackendAPI = async () => {
            const response = await fetch('/serverGarage/data/news');
            const newsNotes = await response.json();
            newsNotes.map(elem => newsArr.push(elem))
            setNews(newsArr);

            if (response.status !== 200) {
                throw Error(newsNotes.message)
            }
            return newsNotes;
        };

      // получение GET маршрута с сервера Express, который соответствует GET из server.js
        useEffect(() => {
            callBackendAPI()
            .then(res => setState(res.newsData))
            .catch(err => console.log(err));
        }, [])
        return news;
}

export default NewsJson;