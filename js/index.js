const visualAid = document.querySelector(".calcContainer");

const submit = document.querySelector("#submit");

submit.addEventListener("click", convertTemp)

const clear = document.querySelector("#clear");
clear.addEventListener("click", clearCalc)

const tempSelector = document.querySelector('.calcSelector');


function convertTemp() {
  if (tempSelector.value == "f_to_c") {
      convertToCelsius();
  } 
  if (tempSelector.value == "c_to_f") {
      convertToFahrenheit();
  }
}

function convertToCelsius() {
  let inputTemp = document.querySelector('#temp').value;
  if (inputTemp !== 0) {
      document.querySelector(".newTemp").innerHTML = parseFloat(inputTemp - 32)*5/9;
  }
  if ((parseFloat(inputTemp - 32)*5/9) < 10) {
      visualAid.style.backgroundColor = "lightblue";
  } else if ((parseFloat(inputTemp - 32)*5/9) > 25) {
      visualAid.style.backgroundColor = "crimson";
  } else {
    visualAid.style.backgroundColor = "coral";
  }
}

function convertToFahrenheit() {
  let inputTemp = document.querySelector('#temp').value;
if (inputTemp !== 0) {
    document.querySelector(".newTemp").innerHTML = parseFloat(inputTemp *9/5) +32;
  }
if ((parseFloat(inputTemp *9/5) +32) < 41) {
    visualAid.style.backgroundColor = "lightblue";
} else if ((parseFloat(inputTemp *9/5) +32) > 78) {
    visualAid.style.backgroundColor = "crimson";
  } else {
    visualAid.style.backgroundColor = "coral";
  }
}

  function clearCalc() {
    let inputTemp = document.querySelector('#temp').value;
      if (inputTemp !== 0)
    document.querySelector('#temp').value = "";
    document.querySelector(".newTemp").innerHTML = "Convert another temperature";
    visualAid.style.backgroundColor = "coral";
  }