require('dotenv').config()
const jwt = require('jsonwebtoken');

exports.get = (req, res) => {
    console.log(req.cookies)

    if (req.cookies.logged_in) {
        jwt.verify(req.cookies.access_token, process.env.JWT_SECRET, (err, result) => {
            if (err) {
                res.render('error', {
                    statusCode: 500,
                    errorMessage: "JWT token not verified"
                }); //error handling (cb) while verifying the jwt
            } else {
                res.render('home', {
                    activePage: { home: true },
                    signedIn: true,
                    username: result.user
                }); //the logged in home page 
                console.log("result is", result)
            }
        })


    } else {
        // console.log(1)
        res.render('home', { activePage: { home: true } }) //if there is no cookies, renders home page
    }
};


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