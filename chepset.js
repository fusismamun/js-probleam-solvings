 const phones = [ 
     {name: 'samsung m21', price:22000, camere: 64, storage: 32},
     {name: 'samsung s21', price:26000, camere: 64, storage: 64},
     {name: 'samsung a15', price:50000, camere: 64, storage: 128},
     {name: 'samsung 95', price:32000, camere: 64, storage: 28},
     {name: 'samsung a54', price:202000, camere: 64, storage: 65},
     {name: 'samsung m32', price:221000, camere: 64, storage: 12},
     {name: 'samsung a21', price:900000, camere: 64, storage: 30}
 ];
 
 function cheapsetPhone(phones){
     let cheapest = phones [0];
     for (const phone of phones){
         if (phone.price < cheapest.price){
             cheapest = phone;
         }
     }
     return cheapest;
 }

 const lowBudget = cheapsetPhone(phones);
 console.log(lowBudget);