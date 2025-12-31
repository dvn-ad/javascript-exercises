let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

getAverageAge = (array) =>{
  let sum=0;
  array.forEach(element => {
    sum+=element.age;
    const newP = document.createElement("p");
    newP.textContent = element.age;
    document.querySelector("body").appendChild(newP);
  });
  
    const newP = document.createElement("p");
    newP.textContent = "divided by " + array.length;
    document.querySelector("body").appendChild(newP);

  return sum/arr.length;
}
// console.l
alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28