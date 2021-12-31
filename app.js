var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var txtArea = document.querySelector("textarea");
var txtOutput = document.querySelector("#output");

btnTranslate.addEventListener("click", clickHandler)

function clickHandler() {
        
    txtOutput.innerText = txtArea.value;
};
