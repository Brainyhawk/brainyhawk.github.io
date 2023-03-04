const text = document.querySelector('#IntroTextHTML').textContent;
let i = 0;
let asrun = "";

function printChar() {
  if (i < text.length) {
    document.getElementById("IntroTextHTML").innerHTML = asrun;
    asrun = asrun + text.charAt(i);
    i++;
    setTimeout(printChar, 25);
  }
}

printChar();