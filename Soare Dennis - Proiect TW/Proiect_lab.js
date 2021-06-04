const schimbaCuloarea = (digit, color) => {
  const divs = document.querySelectorAll('div');
  divs.forEach((div) => {
    if (div.textContent === digit)
      div.style.backgroundColor = color;
  })
}

const keyDownHandler = (event) => {
  console.log('keydown');
  const digit = getDigit(event.code);

  if (!digit)
    return;

  schimbaCuloarea(digit, 'red');
}

const keyUpHandler = (event) => {
  console.log('keyup');
  const digit = getDigit(event.code);

  if (!digit)
    return;

  schimbaCuloarea(digit, 'lightblue');
}

const getDigit = (code) => {
  const digit = code.split('Digit')[1];
  if (digit)
    return digit;

  return false;
}

const keyHandler = (event) => {
  const digit = getDigit(event.code);

  if (!digit)
    return;

  if (event.type === 'keydown')
    schimbaCuloarea(digit, 'red');
  if (event.type === 'keyup')
    schimbaCuloarea(digit, 'lightblue');
}

document.addEventListener('keydown', keyHandler);
document.addEventListener('keyup', keyHandler);


function genereaza() {
  for (let i = 0; i < 3; i++) {
    const div = document.createElement('div');
    div.classList.add('cifra');
    div.textContent = i;
    const body = document.querySelector('body');
    body.appendChild(div);
  }
}

window.onload = genereaza;

setTimeout(function(){ alert("Hello"); }, 3000);
setInterval(function(){ alert("Hello"); }, 20000);

let num = Math.round(4.9);
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var sln = txt.length;
let arr = ["I", "go", "home"];
delete arr[1]; 
alert( arr.length );

function getClass()  
{  
  var e = document.getElementById("btn");  
  alert(e.classList);  
}  

var f = document.getElementsByClassName("bold");

function check() {
  document.getElementById("myCheck").checked = true;
}

function uncheck() {
  document.getElementById("myCheck").checked = false;
}

function readonly()
{
document.getElementById("myText").readOnly = false;
}

var myCollection = document.getElementsByTagName("p");
var i;
for (i = 0; i < myCollection.length; i++) {
  myCollection[i].style.color = "red";
}

const numere = new Set();
numere.add('1'); 
numere.add('2');
numere.add('3'); 
numere.add('4'); 
console.log(numere);