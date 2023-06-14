
const url = 'https://cat-fact.herokuapp.com/facts';

const apiData = fetch(url)
.then((response) => {
    const data = response.json();
    return data
}).then((facts) => facts)
.catch((err) => err);

module.exports.apiData = apiData;