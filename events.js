// Option 1 directly set on the html element
{/* <button onclick="console.log(65)">Another Button</button> */ }
{/* <button onclick="document.body.style.backgroundColor='yellow'">Make yellow</button> */ }


// Option 2 add on click function [we will use this sometimes]
function makeRed() {
    document.body.style.backgroundColor = 'red'
}

// Option 3 add on click function
const makeButtonBlue = document.getElementById('make-blue');
makeButtonBlue.onclick = makeBlue;

function makeBlue() {
    document.body.style.backgroundColor = 'steelblue'
}
// Option 3 another

const makeButtonPurple = document.getElementById('make-purple');
makeButtonPurple.onclick = function makePurple() {
    document.body.style.backgroundColor = 'purple';
}
// Option 4
const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click', makePink)
function makePink() {
    document.body.style.backgroundColor = 'pink';
}

// Option 4 another
const makeGreenButton = document.getElementById('make-green');
makeGreenButton.addEventListener('click', function makeGreen() {
    document.body.style.backgroundColor = 'green'
})

// Option 5 final [we will use this sometimes]
document.getElementById('make-goldenrod').addEventListener('click', function () {
    document.body.style.backgroundColor = 'goldenrod'
})

