// browser
// IIFE
/*
var controller1 = (function(){
    // Global 
    var firstName = "xyz_1"

    var log = function(){
        console.log(this.firstName);
    }

    // Public
    return {
        firstName,
        log
    }
})();

// var firstName ="xyz";

console.log(controller1.firstName);
console.log(controller2.firstName);
console.log(window);
*/


// Node 
const scriptB = require("./scriptB");

scriptB.log("Burak");