
var inputBox = document.querySelector("#input-text");
var translateBtn2 = document.querySelector("#translate-btn2");
var outputText = document.querySelector("#output-text");

const secondURL = "https://api.funtranslations.com/translate/roman-numerals.json";

function getTranslationURL2(inputText) {
    return secondURL + "?" + "text=" + inputText;
}

function handleError(error) {
    alert("Please Enter Number & try again");
    console.log(error);
}

function translateText2() {

    var inputText = inputBox.value;

    fetch(getTranslationURL2(inputText))
        .then(response => response.json())
        .then(json => outputText.innerHTML = json.contents.translated)
        .catch(handleError);

}

translateBtn2.addEventListener("click", translateText2);
