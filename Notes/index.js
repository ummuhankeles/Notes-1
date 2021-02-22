// tür dönüşümü

let number;
number = Number('5'); // string ifade sayısal değer oldu , string to number

number = String(10); // sayısal ifade string oldu , number to string

number = String(true); // bool ifade string oldu , bool to string

number = String(new Date()); // new Date() ifadesi bir object fakat şimdi string oldu

let number1 = 11.4;
number1 = parseInt(number1); // float değer int oldu, output: 11

number1 = "11.4px";
number1 = parseFloat(number1); // string ifadenin içindeki float kısmı alır, output: 11.4

// template literals
// string oluşturmak için kullanılan bir standarttır. 

let name = "Ummuhan";
let country = "Turkey";
let yearOfBirth = 1998;
let value;

value = `My name is ${name}. I'm ${2021 - yearOfBirth} and I live in ${country}.`;
// console.log(value); -> output: My name is Ummuhan. I'm 23 and I live in Turkey.

// Methods

let cities = ['London', 'Istanbul', 'Cambridge', 'New York'];
//console.log(cities.length); -> dizi uzunluğunu bulur

cities.push('Lasvegas');
//console.log(cities); -> push, dizinin sonuna elemanı ekler

cities.pop();
//console.log(cities); -> pop, sondaki elemanı siler

cities.shift();
//console.log(cities); -> shift, baştaki elemanı siler

cities.unshift('Washington DC');
//console.log(cities); -> unshift, başa eleman ekler

let index = cities.indexOf('Cambridge');
//console.log("Index: " + index); -> Cambridge nin index no'sunu aradık, eleman yoksa -1 döndürür

cities.reverse();
//console.log(cities); -> reverse, diziyi ters çevirir.

let numbers = [1, 2, 3, 4];
let value1 = cities.concat(numbers);
//console.log(value1); -> concat, cities dizisi ile numbers dizisini birleştirdi
//output: "New York", "Cambridge", "Istanbul", "Washington DC", 1, 2, 3, 4

// uppercase, lowercase

let firstName = "Ummuhan";
let lastName = "KELES"
firstName = firstName.toUpperCase();
//console.log(firstName) -> output: UMMUHAN
lastName = lastName.toLowerCase();
//console.log(lastName); -> output: keles

// search -> string içerisinde istediğimiz bilgiyi aramak ve yerini bulmak
let email = 'ummuhankeles@gmail.com';
let value2 = email.search('@');
//console.log(value2);

// slice -> belli bir yere kadar al
let value3 = email.slice(0, 7);
//console.log(value3);

// DOMAIN
let DOMAIN = email.slice(email.search('@') + 1);
//console.log(DOMAIN);

// sadece 'gmail' kısmını istiyoruz
let value4 = DOMAIN.slice(0, DOMAIN.indexOf('.'));
//console.log(value4);

// replace -> bilgiyi değiştirir
let newEmail = email.replace('gmail.com', 'icloud.com');
//console.log(newEmail);

// includes -> istediğimiz bilgi var mı? -> output: true or false
let value5 = email.includes('@');
//console.log(value5);

// istediğim bilgiyle başladı mı bitti mi? -> output: true or false
let value6 = email.endsWith('gmail.com');
//console.log(value6);


// important note !!!
// difference between substring and slice
// substring swap those 2 parameters
// slice will not swap

let str = "Hello Javascript";
//str = str.substring(0, 5);
//console.log(str); -> output: Hello
str = str.substring(5, 0);
console.log(str); // output: Hello