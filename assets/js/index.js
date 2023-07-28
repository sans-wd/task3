let calcInp = document.querySelector(".calcInp");
let calcResult = document.querySelector(".calcResult");
let clear = document.querySelector("#clear");
let inpVal = calcInp.innerHTML;

calcInp.innerHTML = "";
clear.addEventListener("click", () => {
  calcInp.innerHTML = "";
  calcResult.innerHTML = 0;
  result = "";
});

function getValue(num) {
  calcInp.innerHTML += num;
  if (
    (num == "/" || num == "%" || num == "*" || num == "-" || num == "+") &&
    (calcInp.innerHTML.slice(inpVal.length - 1) == "/" ||
      calcInp.innerHTML.slice(inpVal.length - 1) == "%" ||
      calcInp.innerHTML.slice(inpVal.length - 1) == "*" ||
      calcInp.innerHTML.slice(inpVal.length - 1) == "-" ||
      calcInp.innerHTML.slice(inpVal.length - 1) == "+") &&
    isNaN(calcInp.innerHTML.slice(inpVal.length - 2, inpVal.length - 1))
  ) {
    calcInp.innerHTML = calcInp.innerHTML.slice(0, -2) + num;
  }
}

function evalu() {
  let final = eval(calcInp.innerHTML);

  calcResult.innerHTML = final;
}
function backSpace() {
  let backSpace = calcInp.innerHTML.slice(0, -1);
  calcInp.innerHTML = backSpace;
}

function reverse() {
  if (calcInp.innerHTML.slice(0, 1) != "-") {
    calcInp.innerHTML = "-" + calcInp.innerHTML;
  } else if (calcInp.innerHTML.slice(0, 1) == "-") {
    calcInp.innerHTML = calcInp.innerHTML.slice(1, calcInp.innerHTML.length);
  }
}
