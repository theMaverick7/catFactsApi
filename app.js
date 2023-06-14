
const {apiData} = require('./module');

apiData.then((apiData) => {
    for(let data of apiData)
        console.log(data.text);
})