let object1 = {
  id: 7,
  name: "chetan",
  Hobbie: "Watching Movie",
  languageUsing: "React",
  country: "India",
  male: true,
  book: [
    {
      language: "React",
      edition: "First",
    },
  ],
};


let { id, name, book } = object1;
document.write("<br>");
document.write("id = " + id);
document.write("<br>");
document.write("name = " + name);
document.write("<br>");
document.write("Hobbie = " + object1.Hobbie);
document.write("<br>");
document.write("Language = " + object1.languageUsing);
document.write("<br>");
document.write("Country = " + object1.country);
document.write("<br>");
document.write("Male = " + object1.male);
document.write("<br>");

document.write("Book Language= " + book[0].language);
document.write("<br>");



let str = "chetan";
let copystr = str;
str = "hello"
console.log(str); //hello
console.log(copystr); //chetan

let arr = [1,2,3,4,5];
let copyarr = arr;
arr[5] = 6;
console.log(arr); //[1, 2, 3, 4, 5, 6]
console.log(copyarr); //[1, 2, 3, 4, 5, 6]


var emptyobj = {};
console.log(emptyobj);
var newobj = new Object();
console.log(newobj);
newobj = {"name": "chetan"};
newobj = {"gender": "male"};
console.log(newobj);













// // Default Binding in JavaScript
// // this keyword is refered to as global object and name() is a standalone and unattached function, so it is bound to the global scope.
// function alert() {
//     console.log(this.company + ' is great.');
// }
// var company = "BaruzoTech";
// alert(); //BaruzoTech is great.

// // Implicit Binding in JavaScript
// //when you call a function using dot notation, this is implicitly bound to the object the function is being called from.
// // here function is attached to an object at the call site.
// function alert2() {
//     console.log(this.mobile + ' is an awesome mobile');
// }

// let mymobile = {
//     mobile : 'apple',
//     alert2 : alert2
// }
// mymobile.alert2(); // apple is an awesome mobile

// // Explicit binding in JavaScript
// // if we want to force a function to use an object as its context without putting a property function reference on the object,
// // We have two utility methods to achieve this: call() and apply().
// function alert3(){
//     console.log(this.name + ' is calling.')
// }
// let myname = {
//     name: 'chetan'
// }
// alert3.call(myname); // chetan is calling.

// // Constructor Call Binding in JavaScript
// // When a function is invoked with the new keyword in front of it, known as a constructor call
// // The newly constructed object with help of 'new' keyword is way that you can bind a function call’s this .
// function alert4(cityName){
//     this.cityName = cityName;
// }
// let city = new alert4('surat');
// console.log(city);
