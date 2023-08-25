export function createImg(iconPath, className = "") {
  let img = require(`./images/${iconPath}`);
  const picture = document.createElement("img");
  picture.src = img;
  return `<img src="${img}" class="${className}">`;
}
