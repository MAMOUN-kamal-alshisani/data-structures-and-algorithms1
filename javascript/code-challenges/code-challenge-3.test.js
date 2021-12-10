
function BinarySearch(arr,searchValue){

for(let i=0; i<arr.length;i++){

if(searchValue ===arr[i]){

return i;
}
}

return -1;

}

// console.log(BinarySearch(numbers,16));
// console.log(BinarySearch(numbers,66));
// console.log(BinarySearch(numbers,50));

describe('Test challenge 0_3' , ()=>{
    test ('Should return a modified array ', ()=>{
        expect(BinarySearch([4,5,18,20,35], 18 )).toStrictEqual(3);
        expect(BinarySearch([55,34,22,64,9], 3 )).toStrictEqual(-1);
    })
})