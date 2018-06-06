


let growingString = ""

document.addEventListener('keypress', (event) => {
    // Adds non enter character to string, and writes that string to the div.
    if (event.charCode != 13) {
        growingString += event.key;
        document.getElementById("typr").innerHTML = growingString;
    }
  });

document.addEventListener('keydown', (event) => {
    // Removes 
    if (event.key == "Backspace") {
        document.getElementById("typr").innerHTML = growingString.substring(0, growingString.length - 1);
    }
});
