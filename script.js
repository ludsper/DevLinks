function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")

    // if(html.classList.contains('light')) {
    //     html.classList.remove('light')
    // } else {
    //     html.classList.add('light')
    // }

// pegar a tag img
    const img = document.querySelector('#profile img')

// substituir a imagem
    if (html.classList.contains('light')) {
    //encontrar a imagem
        img.setAttribute('src', './assets/avatar.png')
    } else {
        img.setAttribute('src', './assets/avatar.png')
    }
}