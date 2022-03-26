/* Test Notes:
-const chai = require("chai")
-const spies = require("chai-spies")
-chai.use(spies)
-9-The receivesAFunction function
-14-The returnsANamedFunction function
-21-The returnsAnAnonymousFunction function*/

function receivesAFunction(callback) {
    callback()

}

function returnsANamedFunction(){
    const goodByeWorld = function () {
        console.log("Always, Goodbye World!");
     
    };
    return goodByeWorld
}
function returnsAnAnonymousFunction(){
    return function() {
        console.log("I\'m a Nomadic cmd, can you see me?");
    };
}