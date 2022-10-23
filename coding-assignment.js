// All questions must be printed to your Browser’s console:

// 1.  Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
    // 1.a Programmatically subtract the value of the first element in the array from the value in the last element of the array 
    // Do not use numbers to reference the last element, find it programmatically, 
    // ages[7] – ages[0] is not allowed!

let ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log("problem 1a: ", ages.at(-1)-ages[0], ", expected: 90")  //assuming that the "do not use numbers to reference last element" means don't hardcode it
// could also do console.log(ages[ages.length-1] -ages[0]) or console.log(ages.)

// 1.b Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).

ages.push(45);
console.log("problem 1b: ", ages.at(-1)-ages[0], ", expected: 42");

// 1c Use a loop to iterate through the array and calculate the average age. 

let total = 0;
for(var i = 0; i<ages.length; i++){
    total += ages[i];
    }

let agesAverage = total/ages.length;
console.log("problem 1c: ", agesAverage, ", expected: 30.5555555555~")


// 2. Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
// 2a. Use a loop to iterate through the array and calculate the average number of letters per name. 

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
let totalChar = 0;   // initializes an accumulator variable at 0
for(var i = 0; i <names.length;i++){ // loops through the names array
    totalChar += names[i].length; // adds the length of each string to the accumulator
}
let avgChar = totalChar / names.length;  // divides the total number of characters by the number of elements in the array
console.log("problem 2a: ", avgChar, ", expected: 3.83~")  //logs the answer as well as the expected output
// I'd much prefer names.reduce(a => totalChar += a.length); instead of a loop

// 2b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces. 
let concatNames = "";   // initializes an empty string to  hold the results
for(var i = 0; i< names.length; i++){  // loops through the names array
    if(i< names.length-1){  // if it's not the last name on the list, add the name plus a space
        concatNames += names[i] + " ";
    }else{ // adds the last name with no space after it
        concatNames += names[i];
    }
}
console.log("problem 2b: ", concatNames, ", expected: 'Sam Tommy Tim Sally Buck Bob'");  //logs the concatenated names, plust the expected output

//I'd much prefer
//   console.log((names.join(" "));

// 3.  How do you access the last element of any array?
console.log("problem 3: ", names[names.length - 1], ", expected: Bob");  //  uses the length of the array - 1 to find the last element
//or
console.log("problem 3: ",names.at(-1),", expected: Bob");  // uses the at method to find the 1st element from the end of the array

// 4.  How do you access the first element of any array?
console.log("problem 4: ", names[0], ", expected: Sam");
//or
console.log("problem 4: ", names.at(0), ", exptected: Sam");

// 5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
// For example:
let nameLengths = [];  // initializes an empty array to hold the lengths
for(var i = 0;i<names.length;i++){  // iterates over the names array
    nameLengths[i] = names[i].length;  // assigns each element of the new array to the length of the corresponding name
}
console.log("problem 5: ", nameLengths, ", expected: [3,5,3,5,4,3]");  // logs the nameLengths array and the expected results
 
namesArray = ["Kelly", "Sam", "Kate"] //given this array
//nameLengths = [5, 3, 4] //create this new array
//same as the first part of problem 5, just with the new namesArray
nameLengths = [];   
for(var i = 0; i<namesArray.length;i++){ 
    nameLengths[i] = namesArray[i].length;
}
console.log("problem 5: ", nameLengths, ", expected [5,3,4]");

// 6.  Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. 
total = 0;  //  assigns 0 to total
for(var i = 0; i<nameLengths.length;i++){ // iterates over nameLengths array
    total += nameLengths[i];  // adds each element to the total
}
console.log("problem 6: ", total, ", expected 12");    // logs the total and the expeced

// 7.  Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).
function concatWord(word, n){
    let result = "";    // initializes result as an empty string
    for(var i=0;i<n;i++){  // iterates n times
        result += word;  // concatenates the word to the result string
    }
    return result;     // returns the resulting string
}

console.log("problem 7: ", concatWord("Hello",3),", expected: 'HelloHelloHello'")  // logs the function and the expected results

// 8.  Write a function that takes two parameters, firstName and lastName, and returns a full name.
// The full name should be the first and the last name separated by a space.
function fullName(firstName, lastName){
    return firstName + " " + lastName;   // concatenates the strings with a space between them
}
console.log("problem 8: ", fullName("Tom", "Sawyer"),", expected: 'Tom Sawyer'")  // logs the function and the expected results

// 9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
function isSumOver100(arrayOfNumbers){
    if(arrayOfNumbers.reduce((a,b)=>a+b)>100){  //adds the array of numbers and checks if it's greater than 100
        return true;   // return true
    }else {  // otherwise
        return false;  // return false
    }
}

console.log("problem 9: ", isSumOver100(ages), ", expected: true");  // logs the function and passes an array whose numbers should add up to be greater than 100
console.log("problem 9: ", isSumOver100(nameLengths), ", expected: false"); // logs the function with an array whose numbers shouldn't add up to 100

// 10. Write a function that takes an array of numbers and returns the average of all the elements in the array.
function arrayAvg(arrayOfNumbers){
    return arrayOfNumbers.reduce((a,b)=>a+b) / arrayOfNumbers.length;  // add the numbers and divide the total by the length of the array
}

console.log("problem 10: ", arrayAvg(ages), ", expected: 30.555~");  // logs the function and the expected results
console.log("problem 10: ", arrayAvg(nameLengths), ", expected: 4");

// 11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
function compareArrays(numArray1,numArray2){
    return (numArray1.reduce((a,b)=>a+b) / numArray1.length) > (numArray2.reduce((a,b)=>a+b) / numArray2.length);
}

console.log("problem 11: ", compareArrays(ages,nameLengths), ", expected: true"); // logs the function and the expected results
console.log("problem 11: ", compareArrays(nameLengths,ages), ", expected: false");

// 12.  Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
function willBuyDrink(isHotOutside,moneyInPocket){
    return (isHotOutside) && (moneyInPocket>10.50)
}

console.log("problem 12: ", willBuyDrink(true,10.51),", expected: true"); // logs the function and passes in parameters that should result in true
console.log("problem 12: ", willBuyDrink(true,10.30),", expected: false"); // logs the function and passes in not enough money in pocket
console.log("problem 12: ", willBuyDrink(false,10.51),", expected: false"); // logs the function and passes in false to isHotOutside

// 13.  Create a function of your own that solves a problem. 
// In comments, write what the function does and why you created it.

//  This function tells how many candycorn are needed
//  if you placed them end-to-end over a certain distance,
//  assuming the path is flat and has no obstacles present.
//  Parameters are distance (a number), and units (a string, will accept meters, feet, km or miles)
//  accepts abbreviations and both singular and plural units of distance,
//  as well as some British spellings.
//  This function assumes that the average length of candy corn is 1 inch.

function howManyCandyCornToGetTo(distance, units){
    
    let numberOfCC;   //declares placeholder for final results
    switch (units){
        // m, meters, metres, meter, metre
        case "m":     
        case "meters":
        case "metres":
        case "meter":
        case "metre":                   //multiply by 39.37 to get inches
            numberOfCC = distance * 39.37;
            break;
        // ft, feet, foot
        case "ft":
        case "feet":
        case "foot":                    //multiply by 12 to get inches
            numberOfCC = distance *12;
            break;
        // km, kilometers, kilometres, kilometer, kilometre
        case "km":
        case "kilometers":
        case "kilometres":
        case "kilometer":
        case "kilometre":               //multiply by 39370 to get inches
            numberOfCC = distance * 39370;;
            break;
        // mi, miles, mile
        case "mi":
        case "miles":
        case "mile":                    //multiply by 63360 to get inches
            numberOfCC = distance * 63360;
            break;
        // any other unit:
        default:
            return "Try again, and label your units!"
    }
    return `You'll need ${Math.ceil(numberOfCC)} candy corn to cover ${distance} ${units}`;
}

console.log("problem 13: ", howManyCandyCornToGetTo(16,"m"),", expected: 630 cc");
console.log("problem 13: ", howManyCandyCornToGetTo(10,"km"),", expected: 393701 cc");
console.log("problem 13: ", howManyCandyCornToGetTo(10,"mi"),", expected: 633,600 cc");
console.log("problem 13: ", howManyCandyCornToGetTo(10,"ft"),", expected: 120 cc");