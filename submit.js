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




// solution 2 
function totalSales (shirtSale , pentSale , shoeSale){
    //string err handaling  
    if(typeof(shirtSale) != 'number' || typeof(pentSale) != 'number' || typeof(shoeSale) != 'number'){
        return 'your inpt is not valid please enter just number';
    } 
    
    //per product price
    let perShirstPrice = 100;
    let perPentPrice = 200;
    let perShoePrice = 500;

    //claculation
    let totalShirtSale = perShirstPrice * shirtSale;
    let totalPentSale = perPentPrice * pentSale;
    let totalShoeSale = perShoePrice * shoeSale;

    const sumOfProducts = totalShirtSale + totalPentSale + totalShoeSale;
    return sumOfProducts;

}

// output 
const result = totalSales(1 , 1 ,3);
console.log(result);





// solution 3 
function deliveryCost(numberOfTshirts) {
    // error handaling string
    if (typeof(numberOfTshirts) != 'number') {
        return "Your input is not valid !! Please enter a number..";
    }
    //  error handaling negative number
    if (numberOfTshirts < 0) {
        return 'Invalid input please enter a positive Quantity';
    }
    //for first 100 tshirts
    if (numberOfTshirts <= 100) {
        return numberOfTshirts * 100;
    }
    //for 101 tshirts and above
    if (numberOfTshirts > 100 && numberOfTshirts <= 200) {
        let first100 = 100 * 100;
        numberOfTshirts = numberOfTshirts - 100;
        let total = numberOfTshirts * 80 + first100;
        return total;
    }
    //for 201 tshirts and above 
    else {
        let first100 = 100 * 100;
        let second100 = 100 * 80;
        numberOfTshirts = numberOfTshirts - 200;
        let total = numberOfTshirts * 50 + second100 + first100;
        return total;
    }
  }
  
  // output 
  const result = deliveryCost(201);
  console.log(result);




  // solution 4 
function perfectFriend(friends){
    // err handling of object
    if(typeof (friends) != 'object'){
        return 'enter valid friendlist';
    }
    
        for(friend of friends){
            if(friend.length  ==  5){
                return friend;
            }
        }
    }
    
    let friends = ['asraful' , 'babu', 'mansu' , 'kabu' , 'dabu' ,'himu', 'masum', 'sk'];
    
    // output 
    const result = perfectFriend(friends);
    console.log(result);
    
    