// jo kam hamy bar bar karna parta hai usay function kehtay hain.
// function ka naam dena parta hai, aur usay call karna parta hai.
// algorithm kehtay hain, jo step by step instructions hoti hain.
// function javascript ka ander 1st class cityzen hota hai. 
// programming me 1st class cityzen kiss ko bolty hota hai.?
// variable 1st class cityzen hota hai.
//quality of 1st class cityzen kya hoti hai?
// 1. function ko variable me store kar sakte hain.
// 2. function ko parameter pass kar sakte hain.
// 3. function ko as a value return kar sakte hain.
// c language me aesa nahi hota. / mother of all languages hai.
// pure function kya hota hai?
// pure function wo hota hai jo kisi bhi global variable ko change nahi karta.

// ya code function syntax es5 ka hai.





function sum (num1, num2){ // orgument ya parameter hota hai. 

    let total = num1 + num2; // local variable

    return total; // last me return statement se value wapas milti hai aur return zaror likhna hai.

}
console.log(sum(12, 26)); // function ko call karna parta hai. isay invoke bhi kehtay hain.
console.log(sum(6, 6)); 


function avg (arr){
    let sum = 0; // local variable
    for (let i = 0; i < arr.length; i++){
        sum = sum + arr[i]; // array ke elements ko add karna parta hai.
    }
    let result = sum / arr.length; // average nikalna parta hai.
    result = result.toFixed(2); // result ko 2 decimal places tak round karna parta hai.
    result = Number(result); // result ko 2 decimal places tak round karna parta hai.

    return result; // average ko return karna parta hai.
}
setTimeout(() => { //delay function. mili second me chalta hai.

console.log(avg([1, 2, 3, 4, 5])); 

}, 3000); // setTimeout function ko use karke 2 second baad average ko print karna parta hai.



window.prt = function () {
    console.log(new Date()); // system ki current date and time print hota hai.
}
//prt(); // function ko call karna parta hai.