export function createImg(iconPath, id = "") {
  let img = require(`./images/${iconPath}`);
  const picture = document.createElement("img");
  picture.src = img;
  return `<img src="${img}" id="${id}">`;
}
