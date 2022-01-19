
  let p="Ab  cd";
  let q="C abd";
  let r=p.toLocaleLowerCase().split('').sort().join('').trim();
 let s=q.toLocaleLowerCase().split('').sort().join('').trim();
 console.log(r)

 console.log(s)
if(r == s ){
console.log("true")
} else{
  console.log("false");
}

