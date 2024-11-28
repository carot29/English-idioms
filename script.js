// Inputs and inner html

// .innerhtml command:
//  1. gets the comtents of an html element e.g. <p>Click <a>here</a></p>
// the anchor is the <a> tag and the read stuff is the rest of it inside the paragraph

// value command: This command retrievs the content of an input element
// *IMPORTANT* valuecommand should ALWAYS be used within a

document.getElementById("btn").addEventListener("click", check);

function check() {
  let awnser = document.getElementById("myInput").value;
  if (awnser != "bullet") {
    document.getElementById("cor").innerHTML = "incorrect, try again";
  } else {
    document.getElementById("cor").innerHTML = "correct";
    next1();
  }
}

function next1() {
  document.getElementById(
    "ch2"
  ).innerHTML = `It's not Rocket...<input type="text" id="myInput2" /><button id="btn2">
  check
</button>`;
  document.getElementById("btn2").addEventListener("click", check2);
}

function check2() {
  let awnser2 = document.getElementById("myInput2").value;
  if (awnser2 != "Science") {
    document.getElementById("Cor2").innerHTML = "incorrect, try again";
  } else {
    document.getElementById("Cor2").innerHTML = "correct";
    next2();
  }
}

function next2() {
  document.getElementById(
    "ch3"
  ).innerHTML = `dumber than a bag of...<input type="text" id="myInput3" /><button id="btn3">check</button>`;
}
