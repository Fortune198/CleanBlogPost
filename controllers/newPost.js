module.exports = (req, res) => {
    if (req.session.userId) {
        return res.render('create');  //create.ejs
    }
    //renders login page if unauthenticated user
    //attempts to create a post
    return res.redirect('/auth/login');
};