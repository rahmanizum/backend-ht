

const url = 'https://hitl.botpress.cloud/660aee36-7f2a-4276-b604-c49689ff61ee/login';
const data = {
};

fetch(url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
})
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });