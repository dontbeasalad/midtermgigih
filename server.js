const express = require('express')
const mongoose = require('mongoose')
const app = express()
const Product = require('./models/model')

app.use(express.json);

const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/blog', (req, res) => {
    res.send('Hello Blog!')
})
//Get Product
app.get("/products", async (req, res) => {
    try {
        const products = await Product.find({})
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Post Product
app.post('/products', async (req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product);

    } catch (error) {
        console.log(error.message)
        res.status(500).json({ message: error.message })
    }
})



mongoose.connect('mongodb+srv://admin:admin123@gigihapi.niauvwe.mongodb.net/Videos?retryWrites=true&w=majority')
    .then(() => {
        console.log('You are connected to MongoDB');
        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`)
        })
    }).catch((error) => {
        console.log(error)
    })