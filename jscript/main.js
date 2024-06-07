// 1.
// let arr = [2, 6, 9, 12];
// let arr1 = [];
// arr.forEach(function (value) { 
//     arr1.push(value ** 2);
// });
// console.log(arr1);

// 2.
// let arr = [2, true, false, 6, -6, 55, 19];
// let abs = arr.includes(55);
// console.log(abs);

// 3.
// let arr = [1, 'salom', true, 5, 10, 20];
// let a = arr.indexOf(20);
// console.log(a);

// 4.
// let arr = [1, 'salom', true, 5, 10, 20, 'salom'];
// let a = arr.lastIndexOf('salom');
// console.log(a);

// 5.
// let arr = [2, 6,9 ,88, 77, 40, 60];
// let res = arr.find(function(qiymat) {
//     return qiymat > 10;
// });
// console.log(res);

// 6.
// let arr = [2, 5, 7, 12, 20];
// let arr1 = arr.findIndex(function (qiymat) {
//     return qiymat > 10; 
// });
// console.log(arr1);

// 7.
// let arr = [2, 6,9 ,88, 77, 40, 60];
// let res = arr.findLast(function(qiymat) {
//     return qiymat > 10;
// });
// console.log(res);

// 8.
// let arr = [2, 6,9 ,88, 77, 40, 60];
// let res = arr.findLastIndex(function(qiymat) {
//     return qiymat > 10;
// });
// console.log(res);

// 9.
// let arr = [2, 6,9 ,88, 77, 40, 60];
// let res = arr.reverse();
// console.log(res);

// 10.
// let arr = ['Ahmadjon', 'ahmadjon',' noyibjonov ', 'Noyibjonov'];
// let arr1 = [- 2, -8, 1, 6, 9];
// let res = arr1.sort(function (a, b) {
//     return a - b;
// });
// console.log(res);

// 11.
// let arr = [2, 4, 6, 8, 10];
// let a = 0;
// let res = arr.forEach(function (value) {
//     a =  value ** 2;
// });
// console.log(a);

// 12.
// let arr = [2, 3, 4, -99, 9, 12, 16, -11, -66, 30, 20];
// let res = arr.filter(function (value) {
//     if ( value >= 0){
//         return arr;
//     }
// });
// console.log(res);

// 13.
// let arr = [2, 3, 5, 9, 19];
// let res = arr.map(function (value) {
//     value = value ** 2;
//     return value;
// });
// console.log(res);

// 14.
// let arr = [-2, 2, 6, 4, 5];
// let res = arr.some(function (value, index) {
//     return value > 0;
// });
// console.log(res);

// 15.
// let arr = [2, 8, 6, 9, 12, 19, -99];
// let res = arr.every(function (value, index) {
//     return value < 0;
// });
// console.log(res);

// 16.
// let arr = [1, 5, -3, 9, 11];
// let res = arr.some(function (value) {
//     return value > 0;
// });
// console.log(res);

// 17.
// let arr = ['Ahmadjon', 'International', 'hello', 'bye'];
// let res = arr.some(function (value) {
//     return value.length < 10;
// });
// console.log(res);

// 18.
// let arr = [2, 6, 9, 7, 12, 19];
// let sum = 0;
// let res = arr.forEach(function (value) {
//     sum = sum + value;
//     return sum;
// });
// console.log(sum);

// 19.
// let arr = ["Ahmadjon", "salom", "masiv", "like"];
// let res = arr.filter(function (value) {
//     return value.length <= 5;
// });
// console.log(res);

// 20.
// let arr = [2, 6, -9, -99, 19, 60, 199];
// let res =  arr.filter(function(value){
//     if ( value >= 0){
//         return value;
//     }
// });
// console.log(res);

// 21.
// let arr = [1, 3, 6, 9, 12];
// let res = arr.filter(function (value) {
//     if ( value % 2 === 0){
//         return value;
//     }
// });
// console.log(res);

// 22.
// const person = [
//     {name: "Ahmadjon", year: 18},
//     {name: "Ibrohimjon", year: 25},
//     {name: "Ozodbek", year: 20},
//     {name: "Alisher", year: 30},
//     {name: "Abdulla", year: 35},
//     {name: "Aziz", year: 19},
// ];
// let res = person[0];
// let res1 = person.filter(function (value) {
//     if ( value.year > 18){
//         return value;
//     }
// });
// console.log(res1);

// 23.
// let arr = [2, 32, 3, 7, 81, 19, 20];
// let res = arr.map(num => num * 3);
// let res1 = res.filter(num => num > 10);
// console.log(res, res1);

// 24.
// let arr = [9, 22, 99, 12, -30];
// let res = arr.every(function (value) {
//     if ( value >= 0){
//         return value;
//     }
// });
// console.log(res);

// 25.
// let arr = [10, 20, 32, 40, 55];
// let res = arr.forEach(function(value) {
//     let res1 = value * 2;
//     console.log(res1); 
// });

// 26.
// let arr = [1, 2, 3, 4, 6, 8, 12, 19, 20];
// let kvadrat = [];
// let res = arr.forEach(function(value) {
//     kvadrat.push(value ** 2);
// });
// console.log(kvadrat);

// 27.
// let arr = [-7, 4, -1, 10, -22, 5, 0, -13];
// let positive = [];
// let res = arr.forEach(function(value) {
//     if (value > 0) {
//         positive.push(value);
//     }
// });
// console.log(positive);

// 28.
// let arr = ["ahmadjon", "banana", "apple", "hello", "world"];
// let res = arr.map(function(value) {
//     return value.toUpperCase();
// });
// console.log(res);

// 29.
// let arr = [1, 5, 9, 10, 20, 100];
// let res = arr.map(function(value) {
//     return Math.sqrt(value);
// });
// console.log(res);

// Math.sqrt //...
// " JavaScriptda Math.sqrt funksiyasi berilgan sonning kvadrat ildizini hisoblash uchun ishlatiladi."
// " Math.sqrt funktsiyasi o'rnatilgan Math ob'ektining bir qismi bo'lib, u turli matematik funktsiyalar va doimiylarni o'z ichiga oladi."

// 30.
// let arr = [1, 5, 9, 19, 25, 33, 100, 250];
// let res = arr.map(function(value) {
//     return value + 5;
// });
// console.log(res);
