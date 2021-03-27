const express = require('express')
const app = express()
const port = 8080
const mongoose = require('mongoose')
var cors = require('cors')
const UserRoutes = require('./usersroutes/UserRoutes')



app.use(cors()) // Use this after the variable declaration


app.use(express.json());
app.use(UserRoutes);

//url

const server = () => {
    const url = 'mongodb+srv://kantahusari:ELCt0MAHWOXF2MA1@lt01.tkoun.mongodb.net/CapStone?retryWrites=true&w=majority'
    mongoose.connect(url,
        {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false
        },
        console.log('connected to database ---')
    )
    app.listen(port, () => { console.log(`server running on port ${port}`) })
}
server()