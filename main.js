


let growingString = "";

let testingText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer blandit dictum odio sed tincidunt. Nunc vel dignissim lacus. Ut placerat tincidunt faucibus. Morbi pellentesque iaculis ex at egestas. In in eleifend neque. Fusce ut facilisis odio. Morbi finibus posuere ante, a semper risus facilisis et. Suspendisse blandit hendrerit ligula, at varius tellus pretium quis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus rutrum eget risus ut vehicula. Duis vulputate interdum arcu, nec porta risus mollis sed. Quisque risus mauris, posuere id vehicula nec, dapibus ut magna. Integer tortor diam, viverra et nulla ut, laoreet dignissim quam. Suspendisse quis sagittis sapien, eu pharetra arcu. Sed lobortis at lorem consequat vulputate. Vivamus ac orci vel lorem ultrices sollicitudin eget et sem.";

// String that the user will have to type
let shrinkingString  = ""
// Holds the typed characters so we can put them back later
let shrinkingStack = [];

let totalChars = 0;

// Is the test being taken?
let testing = false;

// Things that need to be done when the page loads
window.onload = function() {
    shrinkingString = testingText;
    document.getElementById("typrRight").innerHTML = shrinkingString;
};

var timerInterval;

document.addEventListener('keypress', (event) => {
    if(!testing){
      testing = true;
      //Start the timer
      timerInterval = setInterval(timer, 1000);
    }

    // Adds non enter character to string, and writes that string to the div. Adds one to totalChars
    if (event.charCode != 13) {

        // If the user presses the correct key, add it to the left string and take it away from the right.
        if(event.charCode==shrinkingString[0].charCodeAt(0))
        {
          totalChars++;
          growingString += event.key;

          if(shrinkingString[0]!=undefined){
              shrinkingStack.push(shrinkingString[0]);
          }

          // Shorten the string on the right
          shrinkingString = shrinkingString.substring(1, shrinkingString.length);
        }

        document.getElementById("typrLeft").innerHTML = growingString;
        document.getElementById("typrRight").innerHTML = shrinkingString;
    }
  });

document.addEventListener('keydown', (event) => {
    // Removes multiple backspaces, and subtracts from the characters typed
    if (event.key == "Backspace") {
        totalChars--;

        growingString = growingString.substring(0, growingString.length - 1);

        // If there are characters in the stack, move them to the right.
        if(shrinkingStack!=undefined && shrinkingStack.length != 0){
            shrinkingString = shrinkingStack.pop()+shrinkingString;
        }

        document.getElementById("typrLeft").innerHTML  = growingString;
        document.getElementById("typrRight").innerHTML = shrinkingString;
    }
});

let seconds_left = 60;

//Counts down the seconds from 60
function timer() {
    seconds_left--;

    //reset test when timer runs out
    if(seconds_left==0){
      alert(totalChars/4+" WPM");
      shrinkingString = testingText;
      shrinkingStack = [];
      growingString = "";
      totalChars=0;
      seconds_left = 60;
      testing = false;
      clearInterval(timerInterval);
      document.getElementById("typrLeft").innerHTML  = growingString;
      document.getElementById("typrRight").innerHTML = shrinkingString;
    }

    document.getElementById("timer").innerHTML = seconds_left;
}
