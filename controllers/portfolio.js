module.exports = {
    index,
    showThisWebsite
}

function index(req,res) {
    res.render('portfolio/index')
}

function showThisWebsite(req,res) {
    res.render('portfolio/show')
}