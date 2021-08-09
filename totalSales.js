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