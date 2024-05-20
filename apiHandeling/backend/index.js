import express from 'express';

const app = express()
const products = [
    {
        id: 1,
        name: 'knife',
        price: 200,
        image: 'this is img'
    },
    {
        id: 2,
        name: 'steel wire',
        price: 150,
        image: 'this is img'
    },
    {
        id: 3,
        name: 'plastic mug',
        price: 600,
        image: 'this is img'
    },
    {
        id: 4,
        name: 'spoon set',
        price: 450,
        image: 'this is img'
    },
    {
        id: 5,
        name: 'chair',
        price: 600,
        image: 'this is img'
    },
]

app.get('/', (req, res) => {
    res.send('hi this is server')
})

// query parameters
// http://localhost:3000/api/products?search=knife
app.get('/api/products', (req, res) => {

    if (req.query.search) {
        const filterProducts = products.filter(product => product.name.includes(req.query.search))
        res.send(filterProducts)
        return
    }

    setTimeout(() => {
        res.send(products)
    }, 3000);
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`serve at: http://localhost:${port}`);
})