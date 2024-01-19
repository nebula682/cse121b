/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName =" Malcolm Nigel Nkomo";
const currentYear = new Date().getFullYear();
const profilePicture = "images/Mal.jpg";



/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("img");





/* Step 4 - Adding Content */
nameElement.innerHTML =`<strong> ${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute ("src",profilePicture);
imageElement.setAttribute ("alt",`This is ${fullName}, an online student at BYU Idaho`);






/* Step 5 - Array */
let favFoods = ["Pizza", "Ice Cream", "Cake", "Milkshake", "Shawarma", "Sadza", "Ribs",  "Chicken", "Steak", "Burgers"];
document.getElementById("food").innerHTML = favFoods;
let newFood ="Mangoes"
favFoods.push(newFood);
foodElement.innerHTML += `<br>${favFoods}`;
let newFoods = "Pizza"
favFoods.shift(newFoods);
foodElement.innerHTML += `<br>${favFoods}`;
let myFoods = "Mangoes"
favFoods.pop(myFoods);
foodElement.innerHTML += `<br>${favFoods}`;



















