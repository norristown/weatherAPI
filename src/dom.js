const img = require("./image");

export function dom() {
  const card = document.createElement("div");
  card.className = "card";
  document.body.appendChild(card);

  const search = document.createElement("div");
  search.className = "search";
  card.appendChild(search);

  const searchInput = document.createElement("input");
  searchInput.setAttribute("type", "text");
  searchInput.setAttribute("placeholder", "enter city");
  searchInput.setAttribute("spellcheck", false);
  const searchBtn = document.createElement("button");
  const image = img.createImg("magnify.png", "searchBtn");
  search.appendChild(searchInput);
  search.appendChild(searchBtn);
  searchBtn.innerHTML = image;
}
