let input = document.getElementById("textInput");
let count = document.getElementById("current");

input.addEventListener("input", () => {
  let length = input.value.length;
  current.textContent = length;

  if (length > 80) {
    current.style.color = "red";
  } else {
    current.style.color = "black";
  }
});
