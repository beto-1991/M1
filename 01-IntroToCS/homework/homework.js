'use strict';

function BinarioADecimal(num) {
   let decimal = 0;
   for(let i = 0; i < num.length; i++){
      decimal += num[i] * 2 ** (num.length - 1 - i)
   }
   return decimal;
   /*
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
   */

   
}

function DecimalABinario(num) {
   let binario = [];
   while(num >= 1) {
      binario.unshift(num % 2);
      num = Math.floor(num/2);
   }
   return binario.join('')
   /*let numeroBinario = "";
   do {
      if(num % 2 == 0) {
         numeroBinario += "0";
      } else {
         numeroBinario += "1";
      }
      num = Math.floor(num / 2);
   } while (num >= 1)
   let reverseNumeroBinario = [...numeroBinario].reverse().join("");
   return reverseNumeroBinario
   */
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};