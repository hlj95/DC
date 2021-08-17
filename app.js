const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')

app.use(express.urlencoded())

app.engine('mustache', mustacheExpress())

app.set('views', './views')

app.set('view engine', 'mustache')

let trips = []

/*app.post('delete-trip', (req, res) => {
    const tripId = parseInt(req.body.taskId)
    trips = trip.filter((trip) => {
        return trip.tripId != tripId
    })
    res.redirect('/trips')
})*/

app.get('/api/trips', (req,res) => {
    res.json(trips)
})

app.post('/add-trip', (req, res) => {
    const tripTitle = req.body.tripTitle
    const tripImage = req.body.tripImage
    const tripDOD = req.body.tripDOD
    const tripDOR = req.body.tripDOR

    console.log(tripTitle, tripImage, tripDOD, tripDOR)
    const trip = {title: tripTitle, image: tripImage, dateofdeparture: tripDOD, dateofretrun: tripDOR}
    trips.push(trip)
})

app.get('add-trip', (req, res) => {
    res.render('add-trip', {allTrips: trips})
})

app.get('/trips', (req,res) => {
    res.render('trips', {allTrips: trips})
})

app.get('/', (req, res) => {
    
    res.render('index', {allTrips: trips})
})



app.listen(3000, () => {
    console.log('Server is running...')
})