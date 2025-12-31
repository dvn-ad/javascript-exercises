const container = document.createElement("div");
container.classList.add("container");
const button = document.getElementById("custom");
createGrid = () => {
  const divs = document.createElement("div");
  divs.style.border = "black solid";
  divs.style.minHeight = "50px";
  divs.style.minWidth = "50px";
  divs.style.maxWidth = "50px";
  divs.style.opacity = "0";

  // let isMouseDown = false;
  // document.addEventListener("mousedown", () => {
  //   isMouseDown=true;
  // })
  // document.addEventListener("mouseup", () => {
  //   isMouseDown=false;
  // })
  function generateRandomColor() {
    // Generate a random number up to 0xFFFFFF (16777215)
    // which is the maximum value for a 6-digit hex color
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);

    // Pad the result with leading zeros if necessary to ensure it's 6 digits long
    const hexColor = `#${randomColor.padStart(6, "0")}`;

    return hexColor;
  }
  divs.addEventListener("mouseover", () => {
    divs.style.backgroundColor =
      divs.style.backgroundColor == ""
        ? generateRandomColor()
        : divs.style.backgroundColor;
    let opacity = parseFloat(divs.style.opacity);
    opacity = Math.min(opacity + 0.1, 1);
    divs.style.opacity = opacity;
  });
  // divs.addEventListener("mouseout", () => {
  //   divs.style.backgroundColor = "white";
  // });
  container.appendChild(divs);
};

for (let i = 0; i < 256; i++) {
  createGrid();
}

button.addEventListener("click", () => {
  let input = prompt("How many box? (e.g. 16 for 16x16");
  container.innerHTML = "";
  for (let i = 0; i < input * input; i++) {
    createGrid();
  }
  container.style.width = input * 50 + "px";
});

const body = document.querySelector("body");
body.appendChild(container);
