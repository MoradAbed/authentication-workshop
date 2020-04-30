exports.get = (req, res) => {
    // console.log(req.cookies)

    if (req.cookies.logged_in) {
        res.render('home', { activePage: { home: true },
         signedIn: true, 
         username: req.cookies.access_token });    
    } else {
        res.render('home', {activePage: {home: true}})
    }
};