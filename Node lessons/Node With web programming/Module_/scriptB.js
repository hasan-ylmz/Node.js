/* var lastName ="abc";

console.log(lastName);
console.log(window);
 

// IIFE 
var controller2 = (function(){
    // Private 
    var firstName  = "ABC_"

    var log = function(){
        console.log(" Hİ !" +this.firstName )
    }

    // Public
    return {
        firstName,
        log
    }

})()    

console.log(controller1.firstName);
console.log(controller2.firstName);

*/

// Node.js 

// Private Members 
var age = 22;

// public Members 
var firstName = "Ahmet";
var log = function(name){
    console.log(name);
}

module.exports.name =firstName;
module.exports.log =log; 
