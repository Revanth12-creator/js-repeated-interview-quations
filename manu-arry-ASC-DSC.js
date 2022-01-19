let a=[1,9,2,3,10,6,4,7,5,8];

let firstFive=a.slice(0,5).sort((a,b)=>a-b);
console.log(firstFive);
let setVal=a.slice(5,10).sort((a,b)=>b-a);
console.log(setVal);

