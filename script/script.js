let today = new Date();
let hourNow = today.getHours();
let greeting;

if (hourNow > 18) {
    greeting = "Goedeavond"
} else if (hourNow > 12) {
    greeting = "Goedemiddag"
} else if (hourNow > 0) {
    greeting = " Goedemorgen"
} else {
    greeting = "Welkom"
}


document.write("<h3>" + greeting + "</h3>");