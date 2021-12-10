'use strict';

let array1=[1,2,3,7,9,5,6,8];
//

function reverseArray(array1){

    let array2=[];

    for(let i=array1.length-1; i>=0; i--){
        array2.push(array1[i])
      }
  return array2;

}

console.log(`array before reverse iteration`,array1);
console.log(`array after reverse iteration`,reverseArray(array1));