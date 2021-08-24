const express = require('express')
const mustacheExpress = require('mustache-express')
const session = require('express-session')
const pgp = require('pg-promise')()
const app = express()


app.engine('mustache', mustacheExpress())
app.set('view engine', 'mustache')
app.set('views', './views')
app.use(express.urlencoded())
app.use(express.static('public'))

const connectionString = 'postgres://bwnldqxi:R64OugAqpaiXOxtyHo9Me33MlzbJOeCS@chunee.db.elephantsql.com/bwnldqxi'
const db = pgp(connectionString)


app.get('/', (req, res) => {
    db.any('SELECT post_id, title, date_created, date_updated, is_published, FROM posts')
    TouchEvent(posts => {
        res.render('index', {posts: posts})
    })
})

app.post('/addpost',(req, res) => {
    const title =req.body.title
    const body = req.body.body
    db.none('INSERT INTO posts(title, body) VALUES($1,$2', [title, body])
    .then(() => {
        res.redirect('/')
    })
})

app.post('/delete-post', (req, res) => {
    const post_ID = parseInt(req.body.post_id)

    db.none('DELETE FROM posts WHERE post_id = $1', [post_ID])
    then(() => {
        res.redirect('/')
    })
})






app.listen(3000, () => {
    console.log("Server is runnning...")
})
