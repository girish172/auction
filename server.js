const express = require('express')
const app = express()
const port = 4000

let currentAuctionCarName = "";

let AUCTION_STATUS = "";

let AUCTION_START_TIME;

const cars = [{
    name: "Jeep",
    image: ""
}, {
    name: "Tesla",
    image: ""
}, {
    name: "Rivian",
    image: ""
}];

const users = {

}

const getCurrentAuctionCar = () => {
    const currentTime = new Date().getMilliseconds()
    const diff = currentTime - AUCTION_START_TIME
    // 
    if (diff/3) {

    }
}
app.use(express.json());

app.post('/user', (req, res) => {
    console.log(req.body);
    console.log(req.params);
    users[req.body.username] = {}
    console.log("registered user", users);
    res.json({isRegistered: true})
})

app.post('/send-auction-event', (req, res) => {
    users[req.body.username][currentAuctionCarName] = req.body.price
    res.json({bidPosted: true})
})

app.get('/current-auction', (req, res) => {
    if (AUCTION_STATUS === "IN_PROGRESS") {
        const car = getCurrentAuctionCar();
        res.json({
            name: car.name,
            image: car.image
        })
    } else if (AUCTION_STATUS === "AUCTION_ENDED") {
        return "AUCTION_ENDED";
    }
})

app.get('/start-auction', (req, res) => {
    const isAdmin = req.params.password === "password"
    if (isAdmin && AUCTION_STATUS !== "IN_PROGRESS") {
        AUCTION_STATUS = "IN_PROGRESS"
        AUCTION_START_TIME = new Date().getMilliseconds()
    }
})

app.get('/', (req, res) => {
  
res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})