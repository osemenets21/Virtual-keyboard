"use strict";
function keyBoard() {
  const blackboard = document.querySelector(".blackboard p");

  const blackboardString = [];
  let currentblackboard;
  function mixed(data) {
    if (data === "Backspace") {
      blackboardString.splice(blackboardString.length - 1, 1);
    } else if (data === "Tab") {
      blackboardString.push("&nbsp&nbsp&nbsp");
    } else if (data === "Shift") {
      blackboardString.push("");
    } else if (data === "Enter") {
      blackboardString.push("<br>");
    } else if (data === "CapsLock") {
    } else {
      blackboardString.push(data);
    }

    blackboard.innerHTML = blackboardString.join("");
  }

  window.addEventListener("keydown", function (event) {
    console.log(blackboard.innerHTML);

    if (!(event.key === "CapsLock")) {
      console.log("kkkk");
      document.getElementById(event.code).classList.add("active");
      mixed(event.key);
    }

    if (event.key === "CapsLock") {
      document.querySelector(".capslock").classList.toggle("active");
    }
  });
  window.addEventListener("keyup", function () {
    if (!(event.key === "CapsLock")) {
      document.getElementById(event.code).classList.remove("active");
    }
  });
}
keyBoard();
window.addEventListener("keydown", function () {
  console.log(event.keyCode);
});
