// let arr=[1,2,3,4,5]; //array example
// console.log(arr);
// //
// let fill=Array(6).fill(1);  //fillarray
// console.log(fill);
// //
// console.log(arr[0],arr[arr.length-1]); //first and last element of array
// console.log(arr.length); //length of array
// //
// arr.push(6); //add element at the end of array
// console.log(arr);
// arr.pop(); //remove element from the end of array
// console.log(arr);
// arr.unshift(0);
// console.log(arr);//add element at the beginning of array
// arr.shift();//remove element from the beginning of array
// console.log(arr);
// //
// let arr2=[6,7,8];
// let combine=arr.concat(arr2);//combine two arrays
// console.log(combine);
// console.log(combine.slice(2,5)); //extracts of array from index 2 to 5
// //
// combine.splice(2,2,20,40);
// console.log(combine); //insert and remove elements from array
// //
// console.log(arr.indexOf(4));//first index of element 4
// console.log(arr.lastIndexOf(5));//last index of element 5
// console.log(arr.includes(3));//include element 3 in array
// console.log(arr.find(el=>el>3));//find element greater than 3
// console.log(arr.findIndex(el=>el>3));//findindex of element greater than 3
// //
// let evennumber=arr.filter(el=>el%2===0);//filter elements of array
// console.log(evennumber);
// let doublearray=arr.map((el)=>el*2);//double elements of array
// console.log(doublearray);
// //
// let sum=arr.reduce((acc,el)=>acc+el,0);
// console.log(sum); //sum of elements of array
// let product=arr.reduceRight((acc,el)=>acc*el);
// console.log(product)//product of elements of array
// //
// let sortedarray=[...arr].sort((a,b)=>a-b);//sorted array
// console.log(sortedarray);
// console.log(sortedarray.reverse());//sorted array in reverse order
// //
// arr.forEach((el,index)=>console.log(`index.${index}:`,el));//index and element of array
// //



let array=[1,2,3,4,5,6,7,8,9];
let sum=12;
for(let i=0;i<array.length;i++){
    sum+=array[i];
    console.log(sum);
}
    console.log(sum);

