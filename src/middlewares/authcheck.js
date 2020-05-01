
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {

    if (req.cookies.logged_in) {
        jwt.verify(req.cookies.access_token, process.env.JWT_SECRET, (err, result) => {
            if (err) {
                return next(new Error('Are you tring to fuck with the cookie ?'))
            }

            res.locals.user = result;
            next();
        }) // if jwt not valid
    } else {
        next()
    }

}