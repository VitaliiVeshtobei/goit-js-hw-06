const inputRef = document.querySelector("#font-size-control");
const spanRef = document.querySelector("#text");

inputRef.addEventListener("input", spanRangeRef);
function spanRangeRef(event) {
  spanRef.style.fontSize = `${event.currentTarget.value}px`;
}
