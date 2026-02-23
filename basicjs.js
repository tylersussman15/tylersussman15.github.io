let counter = 0;

function runForLoop() {
  let result = "";
  for (let i = 0; i <= counter; i++) {
    result = result + i + " ";
  }
  document.getElementById("forLoopResult").innerText = result;
}

function tickDown() {
  counter = counter - 1;
  document.getElementById("counter").innerText = counter;
}

function addMultiplesToArray() {
  let arr = [];
  for (let i = counter; i >= 5; i--) {
    if (i % 5 == 0) {
      arr.push(i);
    }
  }
  console.log(arr);
}

function changeColor(which) {
  let p = document.getElementById("styleParagraph");
  if (which == 1) {
    p.style.color = "red";
  } else if (which == 2) {
    p.style.color = "green";
  } else if (which == 3) {
    p.style.color = "blue";
  }
}

function showOddNumbers() {
  let result = "";
  for (let i = 1; i <= counter; i++) {
    if (i % 2 != 0) {
      result = result + i + " ";
    }
  }
  document.getElementById("oddNumberResult").innerText = result;
}

function tickUp() {
  counter = counter + 1;
  document.getElementById("counter").innerText = counter;
}

function loadCar(which) {
  if (which == 1) {
    document.getElementById("carType").value = carObject1.cType;
    document.getElementById("carMPG").value = carObject1.cMPG;
    document.getElementById("carColor").value = carObject1.cColor;
  } else if (which == 2) {
    document.getElementById("carType").value = carObject2.cType;
    document.getElementById("carMPG").value = carObject2.cMPG;
    document.getElementById("carColor").value = carObject2.cColor;
  } else if (which == 3) {
    document.getElementById("carType").value = carObject3.cType;
    document.getElementById("carMPG").value = carObject3.cMPG;
    document.getElementById("carColor").value = carObject3.cColor;
  }
}

function printCarObject() {
  let car = {
    cType: document.getElementById("carType").value,
    cMPG: document.getElementById("carMPG").value,
    cColor: document.getElementById("carColor").value
  };
  console.log(car);
}