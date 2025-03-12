class Veiculo {
    #velocidade;
    constructor(tipo, marca, cor, velocidade, passageiros) {
        this.tipo = tipo;
        this.marca = marca;
        this.cor = cor;
        this.#velocidade = velocidade;
        this.passageiros = passageiros;
    }

    getVelocidade() {
        return this.#velocidade;
    }

    setVelocidade(novaVelocidade) {
        this.#velocidade = novaVelocidade;
    }

    acelerar = function () {
        this.#velocidade += 10;
        console.log(this.#velocidade);
    }

    freiar = function () {
        if (this.#velocidade > 0) {
            this.#velocidade -= 5;
            console.log(this.#velocidade);
        } else {
            console.log('O veículo não pode freiar, pois já está parado');
        }
    }
}

const carro = new Veiculo(
    'SUV',
    'Ford',
    'preto',
    200,
    5
);

class Aviao extends Veiculo {
    constructor(tipo, marca, cor, velocidade, passageiros, companhia) {
        super(tipo, marca, cor, velocidade, passageiros);
        this.companhia = companhia;
    }

    acelerar = function () {
        this.setVelocidade(this.getVelocidade() + 30);
        console.log(this.getVelocidade());
    }

    freiar = function () {
        if (this.getVelocidade() > 0) {
            this.setVelocidade(this.getVelocidade() - 15);
            console.log(this.getVelocidade());
        } else {
            console.log('O avião não pode freiar, pois já está parado');
        }
    }
}

class Barco extends Veiculo {
    constructor(tipo, marca, cor, velocidade, passageiros, type) {
        super(tipo, marca, cor, velocidade, passageiros);
        this.type = type;
    }

    acelerar = function () {
        this.setVelocidade(this.getVelocidade() + 20);
        console.log(this.getVelocidade());
    }

    freiar = function () {
        if (this.getVelocidade() > 0) {
            this.setVelocidade(this.getVelocidade() - 20);
            console.log(this.getVelocidade());
        } else {
            console.log('O barco não pode freiar, pois já está parado');
        }
    }
}

console.log(carro);
carro.acelerar();
carro.acelerar();
carro.freiar();

const aviao = new Aviao('comercial', 'boing', 'branco', 0, 100, 'LATAM');
aviao.acelerar();
aviao.freiar();
console.log(aviao);

const barco = new Barco('pessoal', 'Motor', 'branco', 0, 5, 'lancha');
barco.acelerar();
barco.freiar();
console.log(barco);