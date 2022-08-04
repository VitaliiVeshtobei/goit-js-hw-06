const categorieEl = document.querySelector("#categories");
const categorieChildrenEl = categorieEl.children;
console.log(`Number of categories: ${categorieChildrenEl.length}`);

const categoriesEl = document.querySelectorAll(".item");

categoriesEl.forEach((elem) => {
  const titleTextEl = elem.querySelector("h2").textContent;
  console.log(`Category: ${titleTextEl}`);
  const numberEl = elem.querySelectorAll("li").length;
  console.log(`Elements: ${numberEl}`);
});
