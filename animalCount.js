function animalCount (miles){
    let animalDensnityFirst10Mile = 10;
    let animalDensnitySecond10Mile = 50;
    let animalDensnityRestMile = 100;
    if(miles <= 10){
        const count = miles * animalDensnityFirst10Mile;
        return count;
    }
    else if(miles <=20){
     const firstDanseAnimals = 10 * animalDensnityFirst10Mile;
     const secondDanseAnimals = restMiles * animalDensnitySecond10Mile;
     const totalAnimal = firstDanseAnimals + secondDanseAnimals;
     const restMiles = miles - 10;
         return totalAnimal; 
    }
    else{
        const firstDanseAnimals = 10 * animalDensnityFirst10Mile;
        const secondDanseAnimals = 10 * animalDensnitySecond10Mile;
        const restMiles = miles - 20;
        const restDanseAnimals = restMiles + animalDensnityRestMile;
        const totalAnimal  = firstDanseAnimals + secondDanseAnimals + restDanseAnimals;
        return totalAnimal;


    }
}
var animals = animalCount(35);
 console.log('animals are : ' ,animals);


// //  my practice 

// function findBirds (miles){
//     // according to mile the dansity of bird 
//     first10MilesBird = 10;
//     second10MilesBird = 20;
//     resmilesBird = 50;

//     if(miles <= 10){
//         let birstCount = miles * first10MilesBird;
//         return birstCount;
//     }
//     else if(miles <=20){
//         firstdanseOfBirds = 10 * second10MilesBird;
//     }
// }

// const birdsQuantity = findBirds (10);
// console.log('the birds are : ' , birdsQuantity);