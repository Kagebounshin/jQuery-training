$(document).ready(function() {


$(".card").click(function(){
    $(this).toggleClass('flipped');
});


});



/*

$(".back").dblclick(function() {
    $(this).hide();
});

$(".front").click(function(){
    $(this).hide("slow", function(){
        alert('Im hidden');
    });
});

*/

/*
// skapar 9 st divs 
for ( var i = 0; i < 8; i++) {
    $("<div>").appendTo(document.body);
}
*/



/*CHECK YOUR FUNCTIONS WITH console.log FOR EACH STEP. */

/*
let operands = [
    [3, 5],
    [8, 5],
    [3, 89],
    [20, 5]
];

function addTwo(num1, num2) {
    return num1 + num2;
}

let sums = [];

for (let pair of operands) {
    let sum = addTwo(pair[0], pair[1]);
    sums.push(sum);
}
console.log(sums);
*/
/*
function  buildHelloArray(num) {
    let myArray = [];
    for (let i = 0; i < num; i++) {
        myArray.push('hello');
    }
    return myArray;
}

let result = buildHelloArray(5);
console.log(result);
*/

// Working With Math 

/*let random = Math.random();   
console.log(random);

// retunerar en decimal mellan 0 & 1 

let someInteger = Math.floor(25.65);  
console.log(someInteger); // 25

// retunerar det största nummret mindre än eller lika med 
// det insatta värdet.  returning the largest integer less than or equal to to value passed into the function

let someInteger1 = Math.ceil(27.65);
console.log(someInteger1); // 28

//which returns the smallest integer which is greater than or equal to the passed argument:

let numbers = [];

for (let i = 0; i < 10; i++) {
    numbers.push(Math.floor(Math.random() * 100)); /*genom att multiplicera med 100 flyttar man decimalen 20 platser bort, 
                                                   och genom att ha Math.floor så avrundas talet till närmsta heltal. */            
                                                   
                                                   
/*                                                   
console.log(numbers);

console.log(Math.round(1.49122565)); // 1 rundar till närmsta heltal. 

console.log(Math.min(2,4,6)); // 2 väljer minsta nr

console.log(Math.max(37, 22, 102)); // 102 väljer största nr

console.log(Math.pow(2, 6)); // 64 av någon anledning

console.log(Math.sqrt(9)); // 3, Square root.

// Working With Date Objects

let date = new Date();
console.log(date); //dagens datum

let rightNow = Date.now();
console.log(rightNow);

let today = Date.now()
let tomorrow = today + 86400000;

let todayDate = new Date(today);
let tomorrowDate = new Date(tomorrow);

console.log(todayDate.toDateString()); //dagens datum
console.log(tomorrowDate. toDateString()); // morgondagens datum

today1 = new Date();

console.log(today1.getFullYear());
console.log(today1.getMonth());
console.log(today1.getDate());
console.log(today1.getDay());
console.log(today1.getHours());
console.log(today1.getMinutes());
console.log(today1.getSeconds());
console.log(today1.getMilliseconds());

console.log(today1.getUTCDay());

setInterval(function(){
            let timerElement = document.getElementById('timer');
            let currentTime = timerElement.innerHTML;
            currentTime++;
            timerElement.innerHTML = currentTime;
        }, 1000);


function myFunction() {
    console.log('The window has loaded');
}
window.onload = myFunction();

function myFunction2() {
    console.log('This will fire when the body is loaded');
}


function myFunction3 (event) {
    console.log('you clicked the button!')
}

let myButton = document.getElementById('my-button');
myButton.addEventListener('click', myFunction3);




let paragraphs = document.getElementsByTagName('p');

let fruit = [];

for (let i; i < paragraphs.length; i++) {
    fruit.push(paragraphs[i].textContent);
}
console.log(fruit);

$("p").click(function(){
    $("p").css("color", "red");
});

$("h1").hover(function(){
    $("h1").css("background", "lightblue");
});

$("#my-button").click(function(){
    $("#my-button").hide('slow');
});

$("#fruitsButton").click(function(){
    $("p").toggle(1000);
});

$("#fruitsButton").mouseenter(function(){
    $("p").fadeOut(1000).fadeIn(1000);
});

$("p").click(function(){
    $(this).text('hello');
});

$("#fruitsButton").mouseenter(function(){
    $(this).fadeTo(2000, 0.2).fadeTo(2000, 1);
});
*/
