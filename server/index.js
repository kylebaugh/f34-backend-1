// Import express and cors

const express = require('express')
const cors = require('cors') // Cross Origin Resource Sharing

// Invoke express and save to "app" variable

const app = express()

// Setup Middleware - External code that you want to run each time your server starts

app.use(express.json())
app.use(cors())

const inventory = ['peanut butter', 'shrek 2 - the shrekoning', 'sweatshirts', 'pocket sand', 'octoduck', 
                    'pringles can (bbq)', 'MW2 (2009)', 'Anduril, flame of the west', 'shreknado 2', 'pokeball']


app.get('/api/inventory', (req, res) => {

    if(req.query.item){
        console.log('If statement hit!')

        const filteredItems = inventory.filter((item) => item.includes(req.query.item))

        res.status(200).send(filteredItems)

    } else {
        console.log('Else statement hit!')
        res.status(200).send(inventory)
    }

    // console.log(req.params)
    // console.log(req.query)
    // console.log(req.body)

})

app.get('/api/inventory/:id', (req, res) => {
    console.log(req.params)

    let oneItem = inventory[req.params.id]

    res.status(200).send(oneItem)
})

// Open door/port to server

app.listen(5050, () => {
    console.log('Server is running on port 5050')
})