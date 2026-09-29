const num1 = document.getElementById('num1')
const num2 = document.getElementById('num2')
const btnsomar = document.getElementById('btn-somar')
const valorResultado = document.getElementById('valor-resultado')

btnsomar.addEventListener('click', () => {
    const valor1 = Number(num1.value)
    const valor2 = Number(num2.value)

    const somar = valor1 + valor2
    valorResultado.innerText = somar
})

console.log('num1');
console.log('num2');
