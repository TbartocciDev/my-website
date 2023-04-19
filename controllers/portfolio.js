module.exports = {
    index,
    showThisWebsite,
    showSomeMessenger
}

function index(req,res) {
    // const mode = sessionStorage.getItem('mode')
    res.render('portfolio/index')
}

async function showThisWebsite(req,res) {
    res.render('portfolio/this-website')
}

function showSomeMessenger(req,res) {
    res.render('portfolio/some-messenger')
}