const weight = document.getElementById("weight");
const height = document.getElementById("height");
const output = document.getElementById("result");
const wOne = document.getElementById("scale-1-w");
const wTwo = document.getElementById("scale-2-w");
const hOne = document.getElementById("scale-1-h");
const hTwo = document.getElementById("scale-2-h");

function calculate() {
  if (wOne.checked == true && hOne.checked == true) {
    const w = Number(weight.value);
    const h = Number(height.value);
    let totalH = h / 100;
    let display = w / (totalH * totalH);
    let final = display.toFixed(2);
    if (final <= 18.5) {
      output.innerText = "Oh No! You Are Underweight";
      output.style.color = "red";
    } else if (final >= 18.5 && final <= 24.9) {
      output.innerText = "Well Done! You Have a Healthy Weight";
      output.style.color = "green";
    } else if (final >= 25 && final <= 29.9) {
      output.innerText = "You Need To Reduce Your Weight!";
      output.style.color = "#ff4747";
    } else {
      output.innerText = "Get Slim Dude You are OBESE!";
      output.style.color = "maroon";
    }
    console.log(display);
  } else if (wOne.checked == true && hTwo.checked == true) {
    const w = Number(weight.value);
    const h = Number(height.value);
    let H = h * 0.3048;
    let display = w / (H * H);
    let final = display.toFixed(2);
    if (final <= 18.5) {
      output.innerText = "Oh No! You Are Underweight";
      output.style.color = "red";
    } else if (final >= 18.5 && final <= 24.9) {
      output.innerText = "Well Done! You Have a Healthy Weight";
      output.style.color = "green";
    } else if (final >= 25 && final <= 29.9) {
      output.innerText = "You Need To Reduce Your Weight!";
      output.style.color = "#ff4747";
    } else {
      output.innerText = "Get Slim Dude You are OBESE!";
      output.style.color = "maroon";
    }
    console.log(display);
  } else if (wTwo.checked == true && hOne.checked == true) {
    const w = Number(weight.value);
    const h = Number(height.value);
    let totalH = h / 100;
    let totalW = w * 0.45;
    let display = totalW / (totalH * totalH);
    let final = display.toFixed(2);
    if (final <= 18.5) {
      output.innerText = "Oh No! You Are Underweight";
      output.style.color = "red";
    } else if (final >= 18.5 && final <= 24.9) {
      output.innerText = "Well Done! You Have a Healthy Weight";
      output.style.color = "green";
    } else if (final >= 25 && final <= 29.9) {
      output.innerText = "You Need To Reduce Your Weight!";
      output.style.color = "#ff4747";
    } else {
      output.innerText = "Get Slim Dude You are OBESE!";
      output.style.color = "maroon";
    }
    console.log(display);
  } else if (wTwo.checked == true && hTwo.checked == true) {
    const w = Number(weight.value);
    const h = Number(height.value);
    let H = h * 0.3048;
    let totalW = w * 0.45;
    let display = totalW / (totalH * totalH);
    let final = display.toFixed(2);
    if (final <= 18.5) {
      output.innerText = "Oh No! You Are Underweight";
      output.style.color = "red";
    } else if (final >= 18.5 && final <= 24.9) {
      output.innerText = "Well Done! You Have a Healthy Weight";
      output.style.color = "green";
    } else if (final >= 25 && final <= 29.9) {
      output.innerText = "You Need To Reduce Your Weight!";
      output.style.color = "#ff4747";
    } else {
      output.innerText = "Get Slim Dude You are OBESE!";
      output.style.color = "maroon";
    }
    console.log(display);
  } else {
    output.innerText = "Invalid Operation";
    output.style.color = "red";
  }
}

// Lets add responsiveness
const width = window.outerWidth;
if (width <= 768) {
  document
    .getElementById("div-container")
    .classList.remove(
      "w-d",
      "absolute",
      "top-1/2",
      "-translate-x-1/2",
      "-translate-y-1/2",
      "left-1/2"
    );
  document
    .getElementById("div-container")
    .classList.add("w-dr", "block", "ml-rdiv", "mr-rdiv", "mt-10");
  document
    .getElementById("desc-change")
    .classList.remove("text-lg", "ml-14", "mr-14");
  document.getElementById("desc-change").classList.add("ml-10", "mr-10");
  document.getElementById("weight").classList.remove("mr-1/10");
  document.getElementById("weight").classList.add("mr-rdiv");
  document.getElementById("height").classList.remove("mr-1/10");
  document.getElementById("height").classList.add("mr-rdiv");
  document.getElementById("btn-submit").classList.remove("ml-2.50", "w-2/5");
  document
    .getElementById("btn-submit")
    .classList.add("w-2/5", "ml-30", "mr-30");
} else {
}
