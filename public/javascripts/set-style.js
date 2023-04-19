async function setStyle() {
    const styleSheet = document.querySelector('.styleSheet')
    let mode = await sessionStorage.getItem('mode')
    if (mode === null) { mode = 'light' }
    await styleSheet.setAttribute('href', `/stylesheets/show/${mode}.css`)
}

setStyle()