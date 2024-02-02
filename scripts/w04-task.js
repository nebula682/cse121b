/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
     name: "Malcolm Nigel Nkomo",
     photo: {
          src:"images/Malcolm.jpg",
          alt:"My Profile Picture"
     },

     
     favoriteFoods: ["Pizza", "Fries", "shawarma", "Burger", "sadza", "milkshake"],
     hobbies:["singing", "Playing Piano","watching soccer"],
     placesLived:[],
}

/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push({
     place:'Harare,Zim',
     length:'2 years'
}),
myProfile.placesLived.push({
     place: "Bulawayo, Zim",
     length: '4 years'

})






    


     










/* DOM Manipulation - Output */
document.querySelector("#name") .innerHTML = myProfile.name;


/* Name */



/* Photo with attributes */
document.querySelector("#photo").src= myProfile.photo.src;
document.querySelector("#photo").alt= myProfile.photo.alt;


/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food =>{
     let li= document.createElement("li");
     li.textContent = food;
     document.querySelector("#favorite-foods").appendChild(li);
});


/* Hobbies List */
myProfile.hobbies.forEach(hobbies =>{
     let li= document.createElement("li");
     li.textContent = hobbies;
     document.querySelector("#hobbies").appendChild(li);
});




/* Places Lived DataList */
myProfile.placesLived.forEach(place =>{
     let dt= document.createElement("dt");
     dt.textContent = place;
     document.querySelector("#places-lived").appendChild(dt);
});



