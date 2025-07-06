import { useEffect, useState } from "react";

function NewsJson() {

    const [state, setState] = useState(null);
        const [news, setNews] = useState([]);
        const url = "https://volottnazarov.github.io/serverGarage/data/news.json";
        let newsArr = [];

        

        const callBackendAPI = async () => {
            const response = await fetch(url);
            const newsNotes = await response.json();
            console.log('newsObg', newsNotes);
            newsNotes.news.map(elem => newsArr.push(elem))
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