const express = require('express')
const mustacheExpress = require('mustache-express')
const session = require('express-session')
const pgp = require('pg-promise')()
const app = express()
var bcrypt = require('bcryptjs');

app.engine('mustache', mustacheExpress())
app.set('view engine', 'mustache')
app.set('views', './views')
app.use(express.urlencoded())
app.use(express.static('public'))

const connectionString = 'postgres://bwnldqxi:R64OugAqpaiXOxtyHo9Me33MlzbJOeCS@chunee.db.elephantsql.com/bwnldqxi'
const db = pgp(connectionString)

app.use(session({
    secret: 'TACOCAT',
    resave:false,
    saveUninitialized:true
}))


app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    db.one('SELECT user_id, username, password FROM users WHERE username = $1', [username])
    .then((user) => {
        bcrypt.compare(password, user.password, function(errror, result) {
            if (result) {
                if(req.session) {
                    req.session.userId = user.user_id
                }
                res.send('')
            } else {
                res.send('NOT AUTHENTICATED')
            }
        })
    }).catch((error) => {
        res.send('USER NOT FOUND')
    })
})





app.post('/register', (req, res) => {
    const username = req.body.username
    const password = req.body.password

    bcrypt.genSalt(10, function(error, salt) {
        if(!error) {
            bcrypt.hash(password, salt, function(error, hash) {
                if(!error) {
                    db.none('INSERT INTO users(username, password) VALUES($1, $2)', [username, hash])
                    .then(() => {
                        console.log('USER HAS BEEN INSERTED')
                        res.send('INSERTED')
                    })
                }else {
                    res.send('ERROR OCCURRED!')
                }
            })
        }else {
            res.send('ERROR OCCURRED!')
        }
    })
})





app.get('/', (req, res) => {
    db.any('SELECT post_id, title, date_created, date_updated, is_published FROM posts')
    .then(posts => {
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