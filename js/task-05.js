const inputEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");
console.log(spanEl);
console.log(inputEl);
inputEl.addEventListener("input", onInputChange);
function onInputChange(event) {
  spanEl.textContent =
    event.currentTarget.value === "" ? "Anonymous" : event.currentTarget.value;
}
