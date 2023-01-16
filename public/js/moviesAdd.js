window.addEventListener('load', () => {

    console.log('Documento vinculado con exito');

    let $ = (e) => document.querySelector(e)


    let h1 = $('h1')
    let section = $('section')
    let article = $('article')


    h1.innerHTML = "AGREGAR PELICULAS"
    h1.classList.add('titulo')

    article.classList.add('fondoTransparente')
    
    section.classList.add('fondoCRUD')



})
