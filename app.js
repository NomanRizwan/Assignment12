// Change Case

// 1: show the input in capital letters

var userInput = prompt("your Name");
var name = userInput.toUpperCase();
document.write(name);



// 2: title case 

function titlecase(str){
    str = str.toLowerCase().split(" ");
    for(var i =0; i<str.length; i++){
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(" ");
}
str = prompt("your name")  
document.write(titlecase(str));





//Strings: measuring length and extracting parts
//3: favorite mobile phone model. Find and display the length 

var mobile = prompt("phone model", "favorite mobile");
var mobile = mobile.toLowerCase();
var model = ["samsung", "iphone", "vivo", "realme", "oppo", "infinix"]
for (var i = 0; i < model.length; i++) {
    if (mobile === model[i]) {
        document.write("length: " + mobile.length);
    }

}




//Write a program to display the last character of a user input.

var input = prompt("display the last character ")
var name = input.slice(-1);
document.write(name);



//Strings: finding segments
//1. Write a program to find the index of letter “n” in the word “Pakistani”
//and display the result in your browser

var index = "pakistani";
var indexof = index.indexOf("n")
document.write(indexof);


// 2. Write a program to take user input and store username in a
// variable. If the username contains any special symbol among (@ . ,
// !), prompt the user to enter a valid username.

// ???????????-------------------------------????????????


// 3. You have a string “The quick brown fox jumps over the lazy
// dog”. Write a program to count number of occurrences of word “the”
// in given string.


var str = "The quick brown fox jumps over the lazy dog";
var str  = str.split(" ")
var count = str.length;
document.write(count)


// Strings: finding a character at a location
//1. Write a program to find the character at 3 rd index in the word
// “Pakistani” and display the result in your browser.

var char = "pakistani";
var char =  char.slice(0,3)
document.write(char)

// Strings: replacing characters
// 1. Write a program to replace the “Hyder” to “Islam” in the word
// “Hyderabad” and display the result in your browser.

var a = "Hdyerislam"
var replace = a.replace('islam','abad');
document.write(replace)



// 2. Write a program to replace all occurrences of “and” in the string
// with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and
// football together.”;

var str = "“Ali and Sami are best friends. They play cricket and football together.";
var change = str.replace(/and/gi,"&");
document.write(change);


// Rounding numbers
// 1. Write a program that takes a positive integer from user & display
// the following in your browser

// a. number (example number: 3.45214)
// b. round off value of the number

var num = 3.45214;
var round = Math.round(num);
document.write(round);

// c. floor value of the number

var num = 3.45214;
var round = Math.floor(num);
document.write(round);


// d. ceil value of the number

var num = 3.45214;
var round = Math.ceil(num);
document.write(round);


// 2. Write a program that takes a negative floating point number
// from user & display the following in your browser.

// a. Number (example number: -2.678 )
// b. round off value of the number

var number = -2.678;
var num = Math.round(number)
document.write(num)

// c. floor value of the number

var number = -2.678;
var num = Math.floor(number);
document.write(num);

// d. ceil value of the number

var number = -2.678;
var num = Math.ceil(number);
document.write(num);

// Generating random numbers
// 1. Write a program that simulates a dice using random() method of JS
// Math class. Display the value of dice in your browser.

var dice = Math.floor(Math.random()*7);
document.write(dice);

// 2. Write a program that simulates a coin toss using random() method
// of JS Math class. Display the value of coin in your browser.
// 2 = Heads and 1 = Tails

var coin = Math.floor(Math.random()*2)+1
if (coin === 1){
    document.write("Tails" + " " +coin)
}
else{
    document.write("Heads" + " " +coin)

}


// 3. Write a program that stores a random secret number from 1 to 10 in a
// variable. Ask the user to input a number between 1 and 10. If the user input
// equals the secret number, congratulate the user.

var guess = prompt("enter your number guess")
var secret = Math.floor(Math.random()*10)+1
if (guess==secret){
    document.write("congratulation your Guess is Right" + " " + secret);
}
else{
    document.write(" your Guess is wrong" + " " + secret);

}




// Converting strings to integers and decimals
// 1. Write a program that asks the user about his weight. Parse the user
// input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
//d. 50.2kilograms

// var user = prompt("Enter you weight");
// var user = parseFloat(user) 
// document.write(user)




// Converting strings to numbers, numbers to strings
// 1. Write a program that converts a string “472” to a number 472.
// Display the values & types in your browser.
// Hint: (use typeof())

// var str =  "472";
// var num = Number(str)
// console.log(num);

// 2. Write a program that converts the variable num to string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.

// var str = 35.36;
// var num = str.toString().replace('.',"");
// console.log(num);


// Controlling the length of decimals
// 1. Write a program to control the length of decimals to 2.
// var percentage = 30 / 45 * 100; -> 66.66666666666666

// var per = (30 / 45 * 100);
// per = per.toFixed(2);
// document.write(per);
