numbers=[4,7,2,16,36,50]

function BinarySearch(arr,searchValue){

for(let i=0; i<arr.length;i++){

if(searchValue ===arr[i]){

return i;
}
}

return -1;

}

console.log(BinarySearch(numbers,16));
console.log(BinarySearch(numbers,66));
console.log(BinarySearch(numbers,50));