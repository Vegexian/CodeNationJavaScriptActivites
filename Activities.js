                                                                        // DotNotations

//console.log("     |   |     ");   
//console.log("     |   |     "); 
//console.log("     |   |     ");
//console.log("---------------");
//console.log("     |   |     ");   
//console.log("     |   |     ");
//console.log("     |   |     ");
//console.log("---------------");
//console.log("     |   |     ");
//console.log("     |   |     ");
//console.log("     |   |     ");


                                                                        // Variables.

// Activity 1

// let theirName = "Terry";
// let theirAge = "28 years old";
// let favouriteColour = "Teal";

// console.log(`I have a friend who goes by the name ${theirName}, they are ${theirAge} and their favourite colour is ${favouriteColour}.`);

// Activity 2

// let thisDay = "Today";
// let myBreakfast = "Cereal";
// let myLunch = "Cheese on Toast";
// let myDinner = "Chinese styled chicken breast";
// let newTense = "ate";
// thisDay = "Tomorrow";
// myBreakfast = "Fruit Salad";
// myLunch = "Meat and Potato Pie";
// myDinner = "a Takeaway";
// newTense = "will eat";

// console.log(`${thisDay} I ${newTense} ${myBreakfast} for breakfast and I also ${newTense} ${myLunch} for lunch. Later on ${thisDay} I will have ${myDinner} for my dinner`);

// Activity 3

// Used Thomas Unsworths method, helped clear up overthinking. Learn to break things down to basic information.

// 365 days in a year.
// Arpil 15th 2020 is 106 days into the year.
// August 28th 2020 is 241 days into the year.

// let todayDate = "15/03/2020"
// let myBirthday = "28/08/1994"
// let todayDay = 106
// let myDay =241
// let daysFrom = (myDay - todayDay);
// let daysBefore =(365-241);
// let daysFromBirth =(daysBefore + (365*25));
// console.log(`My birthday is ${myBirthday}, Todays date is ${todayDate} it is ${daysFrom} till birthday. Which makes it ${daysFromBirth} days ago that i was born.`) ;


// Activity 4

// let space1 = "X"
// let space2 = "O"
// let space3 = ""
// let space4 = "X"
// let space5 = "X"
// let space6 = ""
// let space7 = "O"
// let space8 = ""
// let space9 = ""

// console.log("            |                   |                  ");   
// console.log(`       ${space1}    |         ${space2}         |     ${space3}    `); 
// console.log("            |                   |                  ");
// console.log("  -------------------------------------------------");
// console.log("            |                   |                  ");   
// console.log(`      ${space4}     |         ${space5}         |     ${space6}    `); 
// console.log("            |                   |                  ");
// console.log("  -------------------------------------------------");
// console.log("            |                   |                  ");   
// console.log(`      ${space7}     |          ${space8}         |     ${space9}    `); 
// console.log("            |                   |                  ");


// Activity 5
//'+';
// let x = 5;
// let y = 10;

// console.log(x + y);

// '-';
// let x = 5;
// let y = 10;

// console.log(y - x);

// '*';
// let x = 5;
// let y = 10;

// console.log(x * y);

//'**';
// let x = 5;
// let y = 10;

// console.log(x ** y);

// '/';
// let x = 5;
// let y = 10;

// console.log(x / y);

// '%';
// let x = 5;
// let y = 10;

// console.log(x % y);

// '++';
// let x = 5;
// x++;

// console.log(x);

// // '--';
// let x = 5;
// x--;

// console.log(x);

// '=';
// let x = 5;
// let y = 10;

// console.log(x);

// '*=';
// let x = 5;
// let y = 10;

// console.log(x *= y);

// '+=';

// let x = 5;
// let y = 10;

// console.log(x += y);

// '/=';
// let x = 5;
// let y = 10;

// console.log(y /= x);

// '-=';
// let x = 5;
// let y = 10;

// console.log(y -= x);

                                                                                // Functions

//  Activity 1

// let orderCount = 0;

// const takeOrder = (size, toppings) => {
//     console.log(`A ${size} inch pizza with ${toppings}, order ${orderCount++}`); 
    
// }
// takeOrder(14, "Pepperoni", orderCount);
// takeOrder(14, "Pepperoni", orderCount);
// takeOrder(14, "Pepperoni", orderCount);
// takeOrder(14, "Pepperoni", orderCount);

// const correctPin = "186723";
// const availBalance = 1000;

// const cashWithdrawal = (withAmount, enteredPin) => {
//     if (enteredPin !== correctPin)
//     console.log("Pin Error")

//     else if (withAmount >= availBalance) {
//             console.log("Insufficient Funds")
//         }
//         else {
//             console.log(`Take your ${withAmount}`);
//         }

//     }
// cashWithdrawal(300, "186723");
// cashWithdrawal(3000, "186723");
// cashWithdrawal(300, "186773");

                                                                    // Arrays Activites

                    // Activity 1
// Create a list of your favourite 3 website and then add 2 more once you've created the list. After that, remove the last item from the list.

// let faveThreeWebs = [
//     "www.YouTube.com",
//     "www.w3schools.com",
//     "www.twitch.tv"
// ]
// // console.log(faveThreeWebs);

// faveThreeWebs.push("www.google.com");
// faveThreeWebs.push("www.facebook.com");
// console.log(faveThreeWebs);

// faveThreeWebs.pop("www.facebook.com");
// console.log(faveThreeWebs);


                    // Activity 2
// Research on the following methods: map(), shift(), unshift(), slice(), splice() (and many more).
// Create a program to demonstrate the uses of each method, some of these may need more than one example.
// Pay attention: not all methods would permanently update/make changes to the arrays themselves.

// Using the map() function.

// let numbers = [1, 2, 3, 4]                                                  // This function is used to call a function and apply it to each element within
// let multiplication = numbers.map(function(num) { return num * 10;})         // an array once and call it to the console. In this case, the new array will 
// console.log(numbers);                                                      // display the original array but multiplied by 10. Calling both arrays will display the
// console.log(multiplication);                                            // original unedited and the new array with the edit for both elements.

// Using the shift() function.

// let numbers = [1, 2, 3, 4];                                   // This function removes the first element in an array and displays it within the console
// let removal = numbers.shift();                                // Using console.log to display the original array and the new array will help show what the  
//                                                             // new array looks like and what has been removed.
// console.log(numbers);
// console.log(removal);

// Using the unshift() function.

// let words = ['balloon', 'ball', 'spoon', 'banana'];         // This function adds a new element at the beginning of the array when recalling the original
// let anotherOne = words.unshift('shoe');                     // array, 'words'. When called, this would show the new array with 'shoe' at the beginning.
// // anotherOne = numbers.unshift(2);                         // When the second array is called, 'anotherOne', the console.log will display the amount of 
//                                                             // elements within the new array.
// console.log(words);
// console.log(anotherOne);

// Using the slice() function.

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];               // This will remove all elements within the array before the designated start point, 
// let section = numbers.slice(3)                              // In this case, everything up to the 3rd index, being the 1, 2 and 3, have been removed  
// //  let section = numbers.slice(6)                          // when console.log is ran.
// console.log(section);

// Using the splice() function.

// let animals = ['cat', 'dog', 'fish', 'monkey', 'rabbit', 'horse'];
// let replaceThem = animals.splice(2, 1, 'hamster');                  // This removes 1 elements from index 2, 'fish' and replaces it with 'hamster'
//                                                                 // when calling the oringal array to the terminal. If you call the other variable, in this
//                                                                 // case it's 'replaceThem', it'll display what has been removed.
// console.log(animals);
// console.log(replaceThem);

                                                            // Loops
// Activity 1

// let favouriteFilms = [
//     "Ice Age",
//     "Monsters Inc",
//     "Ghostbusters",
//     "Avenger's Infinity War",
//     "Jurassic World"
// ];

// const filmCheck = () => {
//     if (favouriteFilms[2] == "Ghostbusters") {
//         console.log("Yay, it's Ghostbusters");
//     }
//     else {
//         console.log("Booo, we want Ghostbusters");
//     }

// }
// filmCheck();

// let num = 50;
// let currentNum = 0;

// while(currentNum != num) {
// console.log(currentNum);
// currentNum = Math.floor(Math.random()*51);
// }
// console.log(currentNum);                                                 // This is a random number generator for whole numbers between 0 and 50.

// currentNum = Math.floor(Math.random()*11) + 2;

// const ranNum = (num, currentNum) => {
    
//     while (num != currentNum)
// console.log(ranNum())}

// console.log(currentNum)