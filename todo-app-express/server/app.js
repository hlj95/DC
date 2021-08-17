
const express = require("express")
const app = express()
app.use(express.json())

const cors = require('cors')
app.use(cors())

let toDo = [{}]

app.get('/todo', (req, res) => {
    res.json(toDo)
})

app.post('/todo', (req, res) => {
    const title = req.body.title
    const priority = req.body.priority
    const date = req.body.date
    const newToDo = {title: title, priority: priority, date: date}
    toDo.push(newToDo)
    res.json(newToDo)
})

app.listen(3000, () => {
    console.log('Server is running...')
})
