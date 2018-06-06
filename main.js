


let word = "";
let character = '';


document.addEventListener("click", function(){
    word += "a";
    document.getElementById("typr").innerHTML = word;
});


document.addEventListener('keypress', (event) => {
    character = event.key;
    if (character == ' ') {
        word += " "
        console.log("space pressed, word is:", word, ".");
    }
    word += character;
    document.getElementById("typr").innerHTML = word;
  });


document.addEventListener('keydown', (event) => {
    if (event.key == "Backspace") {
        alert("backspace pressed")
    }
});
