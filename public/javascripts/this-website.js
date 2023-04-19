const styleSheet = document.querySelector('.styleSheet')
const modeBtns = document.querySelectorAll('.mode-btn')

let mode = sessionStorage.getItem('mode')
if (mode === null) { mode = 'light' }
styleSheet.setAttribute('href', `/stylesheets/show/${mode}.css`)


modeBtns.forEach(function(btn) {
    const val = btn.getAttribute('val')
    btn.removeAttribute('id')
    
    if (val === mode) {
        btn.setAttribute('id', 'selected')
    }
    

    btn.addEventListener('click', function(evt) {
        sessionStorage.setItem('mode', val)
        modeBtns.forEach(function(btn){
            btn.removeAttribute('id')
        })
        btn.setAttribute('id', 'selected')

        styleSheet.setAttribute('href', `/stylesheets/show/${val}.css`)
    })
})