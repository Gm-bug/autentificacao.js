//autentificar os numeros
let escolha = 4
let v1 = 20
let v2 = 0
let resp = null
let texto = null
let textoF = null

switch (escolha) {
    case 1: resp = v1 + v2
        texto = 'somar'
        textoF = 'soma'
        break
    case 2: resp = v1 - v2
        texto = 'subtrair'
        textoF = 'subtração'
        break
    case 3: resp = v1 * v2
        texto = 'multiplicar'
        textoF = 'multiplicação'
        break
    case 4:
        if (v2 != 0) {
            resp = v1 / v2
            texto = 'dividir'
            textoF = 'divisão'
        } else {
            resp = 'Impossível dividir por 0'
        }
        break
    default: resp = 0
        break
}
console.log(`Você escolheu ${texto}`)
console.log(`A ${textoF} de ${v1} e ${v2} : ${resp}`)
