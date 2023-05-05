function mOver() {
  document.getElementById("div").innerHTML = "Thank You";
}

function mOut() {
  document.getElementById("div").innerHTML = "Click Here";
}
function Mdown() {
  document.getElementById("myP").style.color = "red";
}

function Mup() {
  document.getElementById("myP").style.color = "blue";
}
function mouseDown() {
  document.getElementById("pro").style.color = "red";
}

function mouseUp() {
  document.getElementById("pro").style.color = "blue";
}
function modown() {
  document.getElementById("con").style.color = "red";
}

function moup() {
  document.getElementById("con").style.color = "blue";
}
function mouseOver() {
  document.getElementById("service").style.color = "red";
}

function mouseOut() {
  document.getElementById("service").style.color = "blueviolet";
}
function clickOver() {
  document.getElementById("products").style.color = "red";
}

function clickOut() {
  document.getElementById("products").style.color = "blueviolet";
}
function cliOver() {
  document.getElementById("contacts").style.color = "red";
}

function cliOut() {
  document.getElementById("contacts").style.color = "blueviolet";
}

$(document).ready(function () {
  $("#Ws").click(function () {
    $("#Num").slideDown("slow");
  });
});
$(document).ready(function () {
  $("#EM").click(function () {
    $("#Email").slideDown("slow");
  });
});
$(document).ready(function () {
  $("#bn").click(function () {
    $("#Loc").slideDown("slow");
  });
});
$(document).ready(function () {
  $("#pic1").click(function () {
    $("#Loc").hide("slow");
  });
});
$(document).ready(function () {
  $("#pic2").click(function () {
    $("#Email").hide("slow");
  });
});
$(document).ready(function () {
  $("#pic3").click(function () {
    $("#Num").hide("slow");
  });
});
