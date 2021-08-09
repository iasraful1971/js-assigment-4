// solution 1
function seerToMon (seer){
    // err handling string
    if(typeof (seer) != 'number'){
        return 'please enter just number';
    }
    // err handling negative number
    if(seer < 0){
        return 'input only positive number';
    }
    let mon = seer  / 40;
    return mon;
}

// output 
const result = seerToMon(40);
console.log(result);



