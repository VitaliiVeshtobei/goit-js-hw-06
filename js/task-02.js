const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.querySelector("#ingredients");

ingredients.forEach((elem) => {
  const elementList = document.createElement("li");
  elementList.textContent = elem;
  elementList.classList = "item";

  list.appendChild(elementList);
});
