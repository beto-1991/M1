'use strict';

function BinarioADecimal(num) {
   let result = "";
   let sum = 0;
   for(let i = 0; i < num.length; i++){
      result += Math .pow(2, i );
   }
   let revResult = result = [...result].reverse().join("");
   for(let i = 0; i < revResult.length; i++){
      if(num[i] == 1){
         sum += parseInt(revResult[i]);
      } else if(num[i] == 0) {
         sum += 0;
      }
   }
   return sum;


   
}

function DecimalABinario(num) {
   let numeroBinario = "";
   do {
      if(num % 2 == 0) {
         numeroBinario += "0";
      } else {
         numeroBinario += "1";
      }
      num = num / 2;
      num = Math.floor(num);
   } while (num >= 1)
   let reverseNumeroBinario = [...numeroBinario].reverse().join("");
   return reverseNumeroBinario
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};