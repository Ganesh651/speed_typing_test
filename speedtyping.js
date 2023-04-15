let speedTypingTest = document.getElementById("speedTypingTest");
let spinner = document.getElementById("spinner");
let timer = document.getElementById("timer");
let quoteDisplay = document.getElementById("quoteDisplay");
let errMessage = document.getElementById("errMessage");
let result = document.getElementById("result");
let submitBtn = document.getElementById("submitBtn");
let resetBtn = document.getElementById("resetBtn");
let quoteInput = document.getElementById("quoteInput");
let spanText = document.getElementById("spanText");

let uniuqeId;
 function displayQuote(){
    spinner.classList.remove("d-none");
    let url = "https://apis.ccbp.in/random-quote";
    let option = {
        method: "GET"
    };
    fetch(url, option)
    .then(function(response){
        return response.json();
    })
    .then(function(jsonData){
        console.log(jsonData)
        spinner.classList.add("d-none");
        let {content} = jsonData;
        quoteDisplay.textContent = content;
        let count = 0;
         uniuqeId = setInterval(function(){
            timer.textContent = count + 1 + " seconds";
            count += 1;
        },1000)
    });

}
displayQuote();

submitBtn.addEventListener("click", function(){
    if (quoteDisplay.textContent === quoteInput.value){
        clearInterval(uniuqeId);
        result.textContent = "You Typed in " + timer.textContent + " Seconds";
        quoteInput.value = ""
    }
    // else if (quoteInput.value === ""){
    //     errMessage.textContent = "Required*"
    //     result.textContent = ""
    // }
    else{
        result.textContent = "You Typed an incorect sentance";
        quoteInput.value = "" 
    }
})

resetBtn.addEventListener("click", function(){
    spinner.classList.remove("d-none");
    clearInterval(uniuqeId);
    displayQuote();
    quoteInput.value = ""
    result.textContent = ""
});