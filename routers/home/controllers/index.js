module.exports = controllers = {
    
    getHome: function (req, res, next) {
        res.render('index', { title: 'Home' });
    }
}