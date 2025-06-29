// Example usage of the Typer API
const fetch = require('node-fetch'); // Note: You'll need to install this: npm install node-fetch

async function sendTextToTyper(text) {
    try {
        const response = await fetch('http://localhost:3005/receive', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                text: text
            })
        });

        const result = await response.json();
        console.log('Response:', result);
    } catch (error) {
        console.error('Error:', error);
    }
}

// Example usage
sendTextToTyper('Hello, this is being typed automatically!');

// For browser usage (remove the fetch import above):
/*
fetch('http://localhost:3005/receive', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        text: 'Hello, this is being typed automatically!'
    })
})
.then(response => response.json())
.then(data => console.log('Success:', data))
.catch(error => console.error('Error:', error));
*/ 