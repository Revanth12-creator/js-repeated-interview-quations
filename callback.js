// //==================================example1 without argumnts

// function myCallbackfun(){
//     console.log("i ma from my callback");
// }
// function test(a,b,nameCallback){
//     console.log(a,b);
//     nameCallback();
// }
// test(10,20,myCallbackfun)
//==================================example2 with argumets
function myCallbackfun1(sum){
    console.log("i ma from my callback",sum);
}
function test1(a,b,nameCallback1){
    var sum=a+b;
    nameCallback1(sum);
}
test1(10,20,myCallbackfun1)