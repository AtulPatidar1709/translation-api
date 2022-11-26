
var inputBox = document.querySelector("#input-text");
var translateBtn1 = document.querySelector("#translate-btn1");
var translateBtn2 = document.querySelector("#translate-btn2");

var outputText = document.querySelector("#output-text");

const baseURL = "https://api.funtranslations.com/translate/minion.json";

const secondURL = "https://api.funtranslations.com/translate/emoji.json";

function getTranslationURL(inputText) {
    return baseURL + "?" + "text=" + inputText;
}

function getTranslationURL2(inputText) {
    return secondURL + "?" + "text=" + inputText;
}

function handleError(error) {
    alert("Sorry there's an issue! Please try again later");
    console.log(error);
}

function translateText() {

    var inputText = inputBox.value;

    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => outputText.innerHTML = json.contents.translated)
        .catch(handleError);

}

function translateText2() {

    var inputText = inputBox.value;

    fetch(getTranslationURL2(inputText))
        .then(response => response.json())
        .then(json => outputText.innerHTML = json.contents.translated)
        .catch(handleError);

}



translateBtn1.addEventListener("click", translateText);
translateBtn2.addEventListener("click", translateText2);