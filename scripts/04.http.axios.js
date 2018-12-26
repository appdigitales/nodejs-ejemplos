const axios = require('axios');

// 1ª forma, por promesa
// axios.get(`url`)
//     .then(res => {

//     })
//     .catch(e => console.log('error', e));


// 2ª forma, por async await

const miFunction = async (url) => {
    const resp = await axios.get(`https://loripsum.net/api/2/short/headers`)
    const resp2 = await axios.get(`https://loripsum.net/api/2/short/headers`)
    if (resp.status === 200 && resp2.status === 200) {
        return `

        ${resp.data}

        ;) **********

        ${resp2.data}

    `
    }
}


miFunction().then((r, e) => {
    console.log(r)
})