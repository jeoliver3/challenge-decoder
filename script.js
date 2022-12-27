/*
Sobre o desafio: 
As "chaves" de criptografia que utilizaremos são:
`A letra "e" é convertida para "enter"`
`A letra "i" é convertida para "imes"`
`A letra "a" é convertida para "ai"`
`A letra "o" é convertida para "ober"`
`A letra "u" é convertida para "ufat"`

*Requisitos:*
- Deve funcionar apenas com letras minúsculas
- Não devem ser utilizados letras com acentos nem caracteres especiais
- Deve ser possível converter uma palavra para a versão criptografada e 
também retornar uma palavra criptografada para a versão original. 
 */



    var buttonCripto = search(".button-cripto");
    var buttonDescripto = search(".button-descripto");
    var textArea = search(".outputMsg");
    var inputText = search(".input-text");

    function search(item)
    {
        return document.querySelector(item);
    }

    //Função do botão criptografar
    function btnCripto() 
    {
        var text = inputText.value;
        textArea.value = cripto(text);
        inputText.value = "";
    }

    
    //Função para criptografia
    function cripto (text)
    {
        var text = text.replaceAll(/e/gi,"enter")
        .replaceAll(/i/gi,"imes")
        .replaceAll(/a/gi, "ai")
        .replaceAll(/o/gi,"ober")
        .replaceAll(/u/gi,"ufat");
    
        stringCripto = text;
        return stringCripto.toLowerCase();
    }

    // Função do botão descriptografar
    function btnDescripto() 
    {
        var text = inputText.value;
        inputText.value = "";
        textArea.value = descripto(text);
        stringDesripto = text;
        return stringDesripto;
    }

    //Função para descriptografia
    function descripto(text) 
    {
        var text = text.replaceAll("enter","e")
        text.replaceAll("imes","i")
        text.replaceAll("ai", "a")
        text.replaceAll("ober","o")
        text.replaceAll("ufat","u");

        return text;
    }

    //ao clicar no botão, chama um evento (função cripto)
    buttonCripto.addEventListener("click", function(event) 
    {
        event.preventDefault();
        textArea.value=cripto(inputText.value);
    });

    // ao clicar no botão chama um evento (função descripto)
    buttonDescripto.addEventListener("click", function(event)
    {
        event.preventDefault();
        textArea.value = descripto(inputText.value);
    });


