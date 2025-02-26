var cnpj = []
var valido = true;
let cnpjFormatado

function cnpjFormato(cnpj) {
    cnpjFormatado = '';

    for (let i = 0; i < 14; i++) {
        cnpjFormatado += cnpj[i];

        if (i == 1 || i == 4) {
            cnpjFormatado += '.';
        } else if (i == 7) {
            cnpjFormatado += '/';
        } else if (i == 11) {
            cnpjFormatado += '-';
        }
    }

    console.log("CNPJ no seu formato: " + cnpjFormatado);
}

function geradorCNPJ(cnpj){
    for (let i=0; i < 12; i++){
        let numCNPJ = Math.floor(Math.random() * 10)
        cnpj.push(numCNPJ)
    }

    const cnpjValido = cnpj =>{
        if (cnpj.every(digito => digito === cnpj[0])){
            return valido = false;
        }
    }
    if (valido == true){
        console.log("CNPJ gerado é valido: " + cnpj)
    }else{
        console.log("CNPJ Não é valido")
        stop
    }
}

function verificarCNPJ(cnpj){
    let multNum = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]
    let multNum2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]
    let firstDigit = 0
    let secondDigit = 0
    for (let i = 0; i < 12; i++){
        firstDigit += cnpj[i] * multNum[i]
    }
    firstDigit = firstDigit % 11
    if (firstDigit < 2){
        firstDigit = 0
        cnpj.push(firstDigit)
    }else{
        firstDigit = 11 - firstDigit
        cnpj.push(firstDigit)
    }
    for (let i = 0; i < 13; i++){
        secondDigit += cnpj[i] * multNum2[i]
    }
    secondDigit = secondDigit % 11
    if (secondDigit < 2){
        secondDigit = 0
        cnpj.push(secondDigit)
    }else{
        secondDigit = 11 - secondDigit
        cnpj.push(secondDigit)
    }
    if (cnpj.length == 14){
        console.log("CNPJ gerado e com verificador: " + cnpj)
    }
}

geradorCNPJ(cnpj)
verificarCNPJ(cnpj)
cnpjFormato(cnpj)