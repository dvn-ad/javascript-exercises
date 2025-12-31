// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);


const addP = document.createElement("p");
addP.textContent = "Hey I'm red!";
container.appendChild(addP);

const addh3 = document.createElement("h3");
addh3.textContent = "I'm a blue h3!";
content.appendChild(addh3);

const adddiv = document.createElement("div");
adddiv.style.backgroundColor = "pink";
adddiv.style.border = "black solid";

const addh1 = document.createElement("h1");
addh1.textContent = "I'm in a div";
adddiv.appendChild(addh1);

const addPd = document.createElement("p");
addPd.textContent = "ME TOO!";
adddiv.appendChild(addPd);

container.appendChild(adddiv);


const btn = document.querySelector("#btn");
// btn.addEventListener("click", () => {
//   alert("Hello World");
// });
// btn.addEventListener("click", function (e) {
//   console.log(e);
// });
// btn.addEventListener("click", function (e) {
//   console.log(e.target);
// });
btn.addEventListener("click", function (e) {
  e.target.style.background = e.target.style.background=="blue" ? "white":"blue";
});

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    alert(button.id);
  });
});