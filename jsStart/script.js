// Fundamental of js
// Array and objects
// function return
// async js coding

// --------> Array declaration <----------
// var arr = [1, 2, 3, 4, true, "hey", function () { }, []];


// forEach, map, filter, find, indexOf




// foreach ---> To get a traverse to the whole array

// var arr = [1, 2, 3, 4];
// arr.forEach(function (val) {
//     console.log(val + " Hello");  
// })





// Map ----> to do calculation and to store it in array made by map 

// var arr = [1, 2, 3, 4, 5];

// var ans = arr.map(function (val) {
//     return val * 2;
// })
// console.log(ans);





// Filter -----> As the name to take the filtered elements && filter work with true false


// var arr = [1, 2, 3, 4];
// var ans = arr.filter(function (val) {
//     if (val >= 3) return true;
//     else return false;
// })

// console.log(ans);





// Find ----> Gives the first iteration 

// var arr = [1, 2, 3, 4, 3];
// var ans = arr.find(function (val) {
//     if (val === 2) return val;
// })

// console.log(ans);




// indexOf ==> Gives the index where the element is present else returns -1

// var arr = [1, 2, 3, 3, 5];
// console.log(arr.indexOf(2));







// ----------------> Objects are key value pairs  <------------------

// var obj =
// {   
//     name: "Risss",
//     class: 2,
//     superHero: "Batman"
// }

// // If don't want someone to change your value of object you can freeze your object.

// Object.freeze(obj);
// obj.superHero = "Spidey"; // name won't change in obj as it's freeze






// --------------> Functions return <------------

// function abcd() {
//     return 12;
// }
// var ans = abcd();
// console.log(ans);





// --------> Async js <--------

// Async js --> Jo bhi code async nature ka ho usey side stack mein bhej do and agle code ko chalao jo bhi sync natire ka ho jab bhi saata sync code chal jaaye tab check karo ki async code complete hua ya nahi and agar wo complete hua ho to usse main stack mein laao and chala do



// async function abcd() {
//     var blob = await fetch(`https://randomuser.me/api/`);
//     var ans = await blob.json();
//     console.log(ans.results); 
// }

// abcd();
