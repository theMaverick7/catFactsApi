//Hi, Maverick I am your temmate I updated your code
//using async/await
const url = 'https://cat-fact.herokuapp.com/facts';

const getData = async() => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

const apiData = getData();
module.exports.apiData = apiData;