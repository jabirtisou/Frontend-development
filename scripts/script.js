console.log("Script Loaded");


/* menu */
const button = document.querySelector("#menuButton");
function Toggle() {
  var hamburgerMenu = document.getElementById("Get-Menu");
  if (hamburgerMenu.style.display === "none") {
    hamburgerMenu.style.display = "block";
  } else {
    hamburgerMenu.style.display = "none";
  }
}
button.addEventListener("click", Toggle);




/* Footer list */
const title1 = document.querySelector("#title1");
const title2 = document.querySelector("#title2");
const title3 = document.querySelector("#title3");
const title4 = document.querySelector("#title4");
const title5 = document.querySelector("#title5");
const title6 = document.querySelector("#title6");
const title7 = document.querySelector("#title7");
const title8 = document.querySelector("#title8");
const title9 = document.querySelector("#title9");

function Toggle1() {
  var list = document.getElementById("display1");
  if (list.style.display === "none") {
    list.style.display = "block";
  } else {
    list.style.display = "none";
  }
}
function Toggle2() {
  var list = document.getElementById("display2");
  if (list.style.display === "none") {
    list.style.display = "block";
  } else {
    list.style.display = "none";
  }
}
function Toggle3() {
  var list = document.getElementById("display3");
  if (list.style.display === "none") {
    list.style.display = "block";
  } else {
    list.style.display = "none";
  }
}
function Toggle4() {
  var list = document.getElementById("display4");
  if (list.style.display === "none") {
    list.style.display = "block";
  } else {
    list.style.display = "none";
  }
}
function Toggle5() {
  var list = document.getElementById("display5");
  if (list.style.display === "none") {
    list.style.display = "block";
  } else {
    list.style.display = "none";
  }
}
function Toggle6() {
  var list = document.getElementById("display6");
  if (list.style.display === "none") {
    list.style.display = "block";
  } else {
    list.style.display = "none";
  }
}
function Toggle7() {
  var list = document.getElementById("display7");
  if (list.style.display === "none") {
    list.style.display = "block";
  } else {
    list.style.display = "none";
  }
}
function Toggle8() {
  var list = document.getElementById("display8");
  if (list.style.display === "none") {
    list.style.display = "block";
  } else {
    list.style.display = "none";
  }
}
function Toggle9() {
  var list = document.getElementById("display9");
  if (list.style.display === "none") {
    list.style.display = "block";
  } else {
    list.style.display = "none";
  }
}
title1.addEventListener("click", Toggle1);
title2.addEventListener("click", Toggle2);
title3.addEventListener("click", Toggle3);
title4.addEventListener("click", Toggle4);
title5.addEventListener("click", Toggle5);
title6.addEventListener("click", Toggle6);
title7.addEventListener("click", Toggle7);
title8.addEventListener("click", Toggle8);
title9.addEventListener("click", Toggle9);
