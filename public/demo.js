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