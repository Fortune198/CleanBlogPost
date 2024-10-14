module.exports = (req, res) => {
    //removes session from browser
    //redirects user to home page
    req.session.destroy(() => {
        res.redirect('/');
    });
};