const URL = 'https://gnews.io/api/v4/top-headlines?category=general&lang=ru&country=ru&max=10&apikey=3628de98331711d39694c7c1444f4285'


const getNews = () => {
    return fetch(URL, {
        method: 'GET'
    })
    .then((res) => {
        if (res.ok) {
            return res.json();
        } else {
            throw new Error('Network response was not ok.');
        }
    })
    .catch(err => console.log(err));
}

export {getNews}