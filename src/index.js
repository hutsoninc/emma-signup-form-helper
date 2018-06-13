import fetch from 'isomorphic-fetch';

fetch('https://signup.e2ma.net/signup/1875833/1743199/', {
    method: 'get',
    // mode: 'no-cors',
    headers: {
        'Access-Control-Allow-Headers': 'Access-Control-Allow-Origin',
        'Access-Control-Allow-Origin': '*',
    }
})
    .then(res => {
        console.log(res);
    })

