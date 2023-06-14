//Hi, Maverick I am your temmate I updated your code

//using async/await
const {apiData} = require('./module');

apiData.then((apiData) => {
    for(let data of apiData)
        console.log(data.text);
})