const inputEl = document.querySelector("#validation-input");
console.dir(inputEl);
console.log(+inputEl.dataset.length);
console.log(inputEl.id);

inputEl.addEventListener("blur", onInputBlur);
function onInputBlur(event) {
  event.currentTarget.value.length === +inputEl.dataset.length
    ? inputEl.classList.add("valid")
    : inputEl.classList.add("invalid");
  console.log(event.currentTarget.value.length);
  console.log();
}
