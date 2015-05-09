(function(){

    var anArray = ['item1','item2','item3'];

    // Fastest Loop
    for (var x = 0, y = anArray.length; x < y;x+=1){
        console.log(anArray[x]);
    }

    var anObject = {
        prop1: 'property1',
        prop2: 'property2',
        prop3: 'property3'
    };

    // Not the most performant loop
    for (var prop in anObject) {
        if (anObject.hasOwnProperty(prop)) {
            console.log(anObject[prop]);
        }
    }




}());
