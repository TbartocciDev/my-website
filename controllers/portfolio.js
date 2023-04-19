module.exports = {
    index,
    showThisWebsite,
    showSomeMessenger
}

function index(req,res) {
    res.render('portfolio/index')
}

function showThisWebsite(req,res) {
    res.render('portfolio/this-website')
}

function showSomeMessenger(req,res) {
    res.render('portfolio/some-messenger')
}