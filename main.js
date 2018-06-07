


let growingString = "";

// String that the user will have to type
let shrinkingString  = "Lorum Ipsum";

// Holds the typed characters so we can put them back later
let shrinkingStack = [];

let totalChars = 0;

// Things that need to be done when the page loads
window.onload = function() {
    document.getElementById("typrRight").innerHTML = shrinkingString;
};

document.addEventListener('keypress', (event) => {
    // Adds non enter character to string, and writes that string to the div. Adds one to totalChars
    if (event.charCode != 13) {
        totalChars++;
        growingString += event.key;

        // Deal with the text on the right side
        shrinkingStack.push(shrinkingString[0]);
        shrinkingString = shrinkingString.substring(1, shrinkingString.length);

        document.getElementById("typrLeft").innerHTML = growingString;
        document.getElementById("typrRight").innerHTML = shrinkingString;
    }
  });

document.addEventListener('keydown', (event) => {
    // Removes multiple backspaces, and subtracts from the characters typed
    if (event.key == "Backspace") {
        totalChars--;

        growingString   = growingString.substring(0, growingString.length - 1);

        // If there are characters in the stack, move them to the right.
        if(shrinkingStack.length != 0){
            shrinkingString = shrinkingStack.pop()+shrinkingString;
        }

        document.getElementById("typrLeft").innerHTML  = growingString;
        document.getElementById("typrRight").innerHTML = shrinkingString;
    }
});
