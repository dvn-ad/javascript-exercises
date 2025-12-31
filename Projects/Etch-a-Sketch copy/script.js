const container = document.createElement("div");
container.classList.add("container");
const button = document.getElementById("custom");
function generateRandomColor() {
  // Generate a random number up to 0xFFFFFF (16777215)
  // which is the maximum value for a 6-digit hex color
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);

  // Pad the result with leading zeros if necessary to ensure it's 6 digits long
  const hexColor = `#${randomColor.padStart(6, "0")}`;

  return hexColor;
}

createGrid = () => {
  const divs = document.createElement("div");
  // divs.style.border = "black solid";
  divs.style.minHeight = "25px";
  divs.style.minWidth = "25px";
  divs.style.maxWidth = "25px";
  divs.style.opacity = "0.2";
  divs.style.backgroundColor = "green"
    // divs.style.backgroundColor == ""
    //   ? generateRandomColor()
    //   : divs.style.backgroundColor;

  // let isMouseDown = false;
  // document.addEventListener("mousedown", () => {
  //   isMouseDown=true;
  // })
  // document.addEventListener("mouseup", () => {
  //   isMouseDown=false;
  // })

  container.appendChild(divs);
};

for (let i = 0; i < 3000; i++) {
  createGrid();
}
// button.addEventListener("click", () => {
//   let input = prompt("How many box? (e.g. 16 for 16x16");
//   container.innerHTML = "";
//   for (let i = 0; i < input * input; i++) {
//     createGrid();
//   }
//   container.style.width = input * 50 + "px";
// });

const body = document.querySelector("body");
body.appendChild(container);

// document.querySelectorAll("div").forEach((div) => {
//   setTimeout(() => {
//     div.style.opacity = "1";
//   }, 1000);
// });

container.querySelectorAll("div").forEach((div, index) => {
  setTimeout(() => {
    div.style.opacity = "1";
    if (index > 0) {
      container.querySelectorAll("div")[index + 1].style.opacity = "0.9";
      container.querySelectorAll("div")[index + 2].style.opacity = "0.8";
      container.querySelectorAll("div")[index + 3].style.opacity = "0.7";
      container.querySelectorAll("div")[index + 4].style.opacity = "0.6";
      container.querySelectorAll("div")[index + 5].style.opacity = "0.5";
      container.querySelectorAll("div")[index + 6].style.opacity = "0.4";
      container.querySelectorAll("div")[index + 7].style.opacity = "0.3";
      container.querySelectorAll("div")[index + 8].style.opacity = "0.2";
      container.querySelectorAll("div")[index - 1].style.opacity = "0.9";
      container.querySelectorAll("div")[index - 2].style.opacity = "0.8";
      container.querySelectorAll("div")[index - 3].style.opacity = "0.7";
      container.querySelectorAll("div")[index - 4].style.opacity = "0.6";
      container.querySelectorAll("div")[index - 5].style.opacity = "0.5";
      container.querySelectorAll("div")[index - 6].style.opacity = "0.4";
      container.querySelectorAll("div")[index - 7].style.opacity = "0.3";
      container.querySelectorAll("div")[index - 8].style.opacity = "0.2";

      container.querySelectorAll("div")[index+100 + 2].style.opacity = "0.8";
      container.querySelectorAll("div")[index+100 + 3].style.opacity = "0.7";
      container.querySelectorAll("div")[index+100 + 4].style.opacity = "0.6";
      container.querySelectorAll("div")[index+100 + 5].style.opacity = "0.5";
      container.querySelectorAll("div")[index+100 + 6].style.opacity = "0.4";
      container.querySelectorAll("div")[index+100 + 7].style.opacity = "0.3";
      container.querySelectorAll("div")[index+100 + 8].style.opacity = "0.2";
      container.querySelectorAll("div")[index+100 - 1].style.opacity = "0.9";
      container.querySelectorAll("div")[index+100 - 2].style.opacity = "0.8";
      container.querySelectorAll("div")[index+100 - 3].style.opacity = "0.7";
      container.querySelectorAll("div")[index+100 - 4].style.opacity = "0.6";
      container.querySelectorAll("div")[index+100 - 5].style.opacity = "0.5";
      container.querySelectorAll("div")[index+100 - 6].style.opacity = "0.4";
      container.querySelectorAll("div")[index+100 - 7].style.opacity = "0.3";
      container.querySelectorAll("div")[index+100 - 8].style.opacity = "0.2";
      container.querySelectorAll("div")[index+100 + 2].style.opacity = "0.8";

      container.querySelectorAll("div")[index+200 + 2].style.opacity = "0.8";
      container.querySelectorAll("div")[index+200 + 3].style.opacity = "0.7";
      container.querySelectorAll("div")[index+200 + 4].style.opacity = "0.6";
      container.querySelectorAll("div")[index+200 + 5].style.opacity = "0.5";
      container.querySelectorAll("div")[index+200 + 6].style.opacity = "0.4";
      container.querySelectorAll("div")[index+200 + 7].style.opacity = "0.3";
      container.querySelectorAll("div")[index+200 + 8].style.opacity = "0.2";
      container.querySelectorAll("div")[index+200 - 1].style.opacity = "0.9";
      container.querySelectorAll("div")[index+200 - 2].style.opacity = "0.8";
      container.querySelectorAll("div")[index+200 - 3].style.opacity = "0.7";
      container.querySelectorAll("div")[index+200 - 4].style.opacity = "0.6";
      container.querySelectorAll("div")[index+200 - 5].style.opacity = "0.5";
      container.querySelectorAll("div")[index+200 - 6].style.opacity = "0.4";
      container.querySelectorAll("div")[index+200 - 7].style.opacity = "0.3";
      container.querySelectorAll("div")[index+200 - 8].style.opacity = "0.2";
      container.querySelectorAll("div")[index+200 + 2].style.opacity = "0.8";
    }
  }, index * 10);
});
