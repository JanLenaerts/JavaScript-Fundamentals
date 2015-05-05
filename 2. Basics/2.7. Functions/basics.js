var theMeaningOfLife = 42;

var global = 1;

function aFunction() {
    var local = 2;
    console.log(global);
    console.log(local);
}


(function invokeImmediately(){
    console.log('ivoked automatically');
})();
