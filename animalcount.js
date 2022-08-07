 function animalsCount(miles){
     const animalDensity10Miles = 10;
     const animalDensity20Miles = 50;
     const animalDensity30Miles = 100;
     if(miles <= 10){
         const count = miles * animalDensity10Miles;
         return count;
     }
     else if (miles <= 20){
         const first10 = 10 * animalDensity10Miles;
         const restMiles = miles - 10;
         const first20 = restMiles * animalDensity20Miles;
         const totalAnimals = first10 + first20;
         return totalAnimals;

     }
     else {
        const first10 = 10 * animalDensity10Miles;
        const first20 = 10 * animalDensity20Miles;
        const restMiles = miles - 20;
        const restMilesAnimals =  restMiles * animalDensity30Miles;
        const totalAnimals = first10 + first20 + restMilesAnimals;
        return totalAnimals;

     }

 }
 
 let animal = animalsCount(30);
 console.log(animal);