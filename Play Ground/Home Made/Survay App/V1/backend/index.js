import express from 'express';

const app = express()
const jokes = [
    {
        id: 1,
        title: 'joke no 1',
        content: 'this is joke'
    },
    {
        id: 2,
        title: 'joke no 2',
        content: 'this is joke'
    },
    {
        id: 3,
        title: 'joke no 3',
        content: 'this is joke'
    },
    {
        id: 4,
        title: 'joke no 4',
        content: 'this is joke'
    },
    {
        id: 5,
        title: 'joke no 5',
        content: 'this is joke'
    },
]

app.get('/', (req, res) => {
    res.send('hi this is server')
})

app.get('/api/jokes', (req, res) => {
    res.send(jokes)
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`serve at: http://localhost:${port}`);
})