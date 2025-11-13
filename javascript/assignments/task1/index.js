const box = document.getElementById("bigBox");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");

btn1.addEventListener("click", () => (box.style.backgroundColor = "red"));
btn2.addEventListener("click", () => (box.style.backgroundColor = "blue"));
btn3.addEventListener("click", () => (box.style.backgroundColor = "green"));
btn4.addEventListener("click", () => (box.style.backgroundColor = "yellow"));
