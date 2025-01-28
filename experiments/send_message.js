const url = 'https://hitl.botpress.cloud/d8d8ca13-b68d-41d7-97d9-3df664e2e430/messages';

const data = {
    "payload": {
        "type": "text",
        "text": "from vscode "
    },
    "conversationId": "conv_01JJP4N9JF2NJFFSNR3PQPYQHC"
}



fetch(url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'x-user-key': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InVzZXJfMDFKSjI5Qzc2WFBSQ1dSRFFTUENERjQzOEIiLCJleHBpcmVzQXQiOjE3MzgxNDM3ODY1MzEsImlhdCI6MTczODA1NzM4Nn0.ugPc8eklE6QT_S6EuAvI0S6nHXwzuNE5dBYtqqNUhoQ'
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