var EAN = "7898765430018";
var EAN2 = EAN.slice(0, 12);
var verificador = parseInt(EAN.slice(12));
var dados = [
    {
        "codigo_pais": "789",
        "pais_origem": "Brasil",
        "codigo_fabricante": "8765",
        "fabricante": "Fabricante A",
        "codigo_produto": "43001",
        "nome_produto": "Produto X",
        "descricao": "Descrição do Produto X"
    },
    {
        "codigo_pais": "110",
        "pais_origem": "Estados Unidos",
        "codigo_fabricante": "5432",
        "fabricante": "Fabricante B",
        "codigo_produto": "10987",
        "nome_produto": "Produto Y",
        "descricao": "Descrição do Produto Y"
    },
    {
        "codigo_pais": "101",
        "pais_origem": "Japão",
        "codigo_fabricante": "7890",
        "fabricante": "Fabricante C",
        "codigo_produto": "123456",
        "nome_produto": "Produto Z",
        "descricao": "Descrição do Produto Z"
    }
];
function codigoVerify() {
    var EANImpar = 0, EANPar = 0, EANFinal;
    for (var i = 0; i < 12; i++) {
        var digit = parseInt(EAN2[i]);
        if (isNaN(digit)) {
            console.log("Invalid EAN code");
            return;
        }
        if (i % 2 === 0) {
            EANPar += digit * 1;
        }
        else {
            EANImpar += digit * 3;
        }
    }
    EANFinal = EANPar + EANImpar;
    EANFinal = (10 - (EANFinal % 10)) % 10;
    if (EANFinal === verificador) {
        var codigo_pais_1 = EAN.slice(0, 3);
        var codigo_fabricante_1 = EAN.slice(3, 7);
        var codigo_produto_1 = EAN.slice(7, 12);
        console.log(codigo_fabricante_1, codigo_pais_1, codigo_produto_1);
        var pais_info = dados.find(function (item) { return item.codigo_pais === codigo_pais_1; });
        var fabricante_info = dados.find(function (item) { return item.codigo_fabricante === codigo_fabricante_1; });
        var produto_info = dados.find(function (item) { return item.codigo_produto === codigo_produto_1; });
        if (pais_info && produto_info && fabricante_info) {
            console.log("País:", pais_info.pais_origem);
            console.log("Fabricante:", pais_info.fabricante);
            console.log("Nome do Produto:", pais_info.nome_produto);
            console.log("Descrição:", pais_info.descricao);
        }
    }
}
codigoVerify();
