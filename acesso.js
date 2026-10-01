const titulo = document.getElementById('titulo')
const subtitulo = document.getElementById('subtitulo')
const imgcarro = document.getElementById('imgcarro')
const alterarNome = document.getElementById('alterarNome')
const nome = document.getElementById('nome')

titulo.innerText = "acessando elemento agora..."
subtitulo.textContent = "inserindo h2"

imgcarro.addEventListener('click', () => {
    alert = "hora de tomar cafe"
    titulo.style.color = "rgba(255, 7, 7, 0)"
    subtitulo.style.color = "#901228"
})

alterarNome.addEventListener('click', () => {
    const novoNome = nome.value
    subtitulo.textContent = novoNome
    nome.value = ""
    nome.focus()
    nome.style.color = "#ff153c"
})
