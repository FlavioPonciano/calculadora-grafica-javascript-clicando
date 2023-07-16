function calcular(tipo, valor) {

    if(tipo === 'acao') {
        if(valor === 'c') {
            //limpar o visor (id resultado)
            document.getElementById('resultado').value = ''
        }

        //Condição para atribuir e concatenar os valores clicados mais o simbolo
        if(valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.') {
            document.getElementById('resultado').value += valor
        }

        if(valor === '=') {
            var valorCampo = eval(document.getElementById('resultado').value) //eval processa os dados recebidos em formato de string como números, possibilitando assim o calculo matematico, ele vai pegar os valores de números como números e usar o simbolo para fazer o calculo 
            document.getElementById('resultado').value = valorCampo //sobrepondo o valor contigo na tela pelo resultado da expressão matematica
        }
    } else if(tipo === 'valor') {
        /* var valorCampo = document.getElementById('resultado').value atribuo o valor clicado em uma variável e depois concateno como valor
        document.getElementById('resultado').value = valorCampo + valor concatenando os valores (sempre cuidando para que nao sejam números e sim string .value geralmente recupera em formato de string */
        document.getElementById('resultado').value += valor
    }
}