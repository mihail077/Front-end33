
function generatorRange (n1, n2) {
    let endNum; 
 if (n2 > n1) {
     endNum = n2 - n1;
 } else if (n1 > n2) {
     endNum = n1 - n2
 } else {
     console.log('error');
     return
 }
 const randomNum = n1 + Math.round(Math.random() * endNum);
 return randomNum
 };
 
 function generatorArray(num) {
     let arr = [];
     let i = 0
     
     while (i <= num) {
         arr.push(i)
         i++
     }
     return arr
 }

 function iterArray(arr = []) {
     arr.forEach(function(value, index, array) {
         console.log('I generate ' + value + ' with index: ' + index);
     })
     console.log(arr);
 }
 
 let randomNum = generatorRange(5, 15);
 let randomArray = generatorArray(randomNum);
 iterArray(randomArray)