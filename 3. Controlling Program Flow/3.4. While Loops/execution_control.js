(function(){

    var limit = 0;

    while (limit < 5) {
        if (limit === 3){
            break;
        }
        console.log(limit +=1);
    }

    var condition = true;

    do {
        console.log('once');
        break;
    }while(condition);

}());
