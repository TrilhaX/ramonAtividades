let cpf = '123.456.789-38';
let cpfTeste = cpf.slice(0, 11);

function replace(input: string): void {
    return input
    .replace(/["."]/g, "")
    .replace("-", "")
}
function verifyCPF(): void {
    var onlyNums: boolean = replace(cpf);
    for (var i = 2; i < 10; i++) {
        var firstDigit: any = onlyNums[i - 1] * i;
        firstDigit = firstDigit + firstDigit
    }
    firstDigit = firstDigit % 11;
    if (firstDigit < 2){
        firstDigit = 0;
    }else{
        firstDigit = 11 - firstDigit;
    }
    var secondDigit: any = firstDigit[9] * 11;
    secondDigit = secondDigit % 11;
    if (secondDigit < 2){
        secondDigit = 0;
    }else{
        secondDigit = 11 - firstDigit;
    }
    let cpfFinal = cpfTeste + "-" + firstDigit + secondDigit
    if (cpf === cpfFinal){
        console.log("CPF Válido");
    }
}
verifyCPF();