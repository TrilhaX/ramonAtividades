let cartaoNum = "4539148803436467";

function verifyCartao(cartaoNum) {
    let sum = 0;

    for (let i = 0; i < cartaoNum.length; i++) {
        let digit = parseInt(cartaoNum[cartaoNum.length - 1 - i], 10);

        if (i % 2 === 1) {
            digit *= 2;
            if (digit > 9) {
                digit = (digit % 10) + Math.floor(digit / 10);
            }
        }
        sum += digit;
    }

    if (sum % 10 === 0) {
        console.log("Cartão válido!");
    } else {
        console.log("Cartão inválido!");
    }
}

verifyCartao(cartaoNum);