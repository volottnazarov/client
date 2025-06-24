fetch('http://localhost:3001/users')
    .then((response) => {
        if(!response.ok){
            throw new Error(`Request failed with status ${response.status}`);
        }
        return response.json();
    })
    .then ((result) => console.log(result))
    .catch((err) => console.log(err));
