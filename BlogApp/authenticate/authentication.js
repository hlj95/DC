function authenticate (req, res, next) {
    if(req.session) {
        if(req.session.userId) {
            next()
        } else {
            res.redirect('/')
        }
    } else {
        res.redirect('/')
    }
}

module.exports = authenticate