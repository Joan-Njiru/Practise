//Print the odd numbers less than 100

function oddNumbers(){
    for(let i=0;i<=100;i++){
        if(i%2!==0){
            console.log(i);
        }
    }
}
oddNumbers()

//Given a string, reverse each word in the sentence.
// function reversed(word){
//     console.log(word.split('').reverse().join('')); 
// }
// reversed(`Joan is a great girl`)
function reversal(word){
    console.log(word.split(' ').map(w=>w.split('').reverse().join('')).join(' '));
}
reversal("Joan is a great girl")

//Write a JavaScript function that accepts a string as a parameter and
// converts the first letter of each word of the string in upper case
function takesString(words){
    console.log(words.split(' ').map(w=>w[0].toUpperCase()+w.substring(1).toLowerCase()).join(' '));
}
takesString("I am an embu girl")

// Write a JavaScript function that accepts a string as a parameter and counts 
// the number of vowels within the string
function countVowels(stringed){
    let counting=stringed.match(/[aeiou]/gi).length
    return counting
}
console.log(countVowels("Umbrellaa"));
//Write a JS code to calculate the sum of digits in a number
function sumDigits(num){
   let numb=num.toString();
   let count=0;
   for (i=0;i<numb.length;i++){
   count+=+(numb[i])
}
return count
}
console.log(sumDigits(83624));

//Write a JavaScript program to sort the items of an array

// function sortItems(){
   
// }

//Write a function that takes an array of numbers as an argument and returns the sum of all the even numbers in the array?
function sumOfEvens(nums){
    sum=0
    for(let i=0;i<=nums.length;i++){
        if(nums[i]%2==0){
            sum+=nums[i];
        }
    }
    return sum
}
let nums=[2,4,6,1,3,8]
console.log(sumOfEvens(nums));

//Write a function that takes a string as an argument and returns the number of uppercase letters in the string.
// function countUppercase(word){
//     count=0;
//     for(let i=0;i<=word.length;i++){
//         if(word[i]>='A' && word[i]<='Z'){
//             count+=1
//         }
//     }
//     return count
// }
// console.log(countUppercase("BaZuKa"))

function countUppercase(word){
    let counted=(word.match(/[A-Z]/g)).length
    console.log(counted);
}
countUppercase("BaZuKa")
   
//Print the multiplication table with 7
function multiplication(num){
    for(let i=0;i<=10;i++){
        let ans=i*num;
        console.log(`${i}*${num}=${ans}`);
    }
}
multiplication(7)

//Write a JavaScript for loop that will iterate from 0 to 15. For each iteration check if 
//the current number is even or odd and display a message.

// function checkEvenOrOdd(){
//     for(let i=0;)
// }

