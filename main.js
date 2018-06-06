


let growingString = ""

document.addEventListener('keypress', (event) => {
    // Adds non enter character to string, and writes that string to the div.
    if (event.charCode != 13) {
        growingString += event.key;
        document.getElementById("typr").innerHTML = growingString;
    }
  });

document.addEventListener('keydown', (event) => {
    // Removes multiple backspaces
    if (event.key == "Backspace") {
        growingString = growingString.substring(0, growingString.length - 1);
        document.getElementById("typr").innerHTML = growingString;
    }
});
