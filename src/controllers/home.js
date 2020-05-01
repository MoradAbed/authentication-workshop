require('dotenv').config()
const jwt = require('jsonwebtoken');

exports.get = (req, res) => {
    console.log(req.cookies)


    if (res.locals.user) {

        res.render('home', {
            activePage: { home: true },
            signedIn: true,
            username: res.locals.user.user
        }); //the logged in home page 
    }
    else {
        res.render('home', { activePage: { home: true } })
    }
}


////////////////////////////////////////////////////////////////////////////////////////



// if (req.cookies.logged_in && jwt.verify(req.cookies.access_token, process.env.JWT_SECRET)) {
//     //   console.log("jwt is:",jwt.verify(req.cookies.access_token, process.env.JWT_SECRET))
//     res.render('home', {
//         activePage: { home: true },
//         signedIn: true,
//         username: req.cookies.access_token
//     }); //the logged in home page 
//     // console.log("result is", result)
// } else {
//     // console.log(1)
//     res.render('home', { activePage: { home: true } }) //if there is no cookies, renders home page
// }}