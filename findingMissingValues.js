// finding the missing values=============
var a = [1, 3, 4, 6, 7, 8, 10];

  var b = [];
  var c=[]
  const check = () => {
    for (var i = 0; i <= 10; i++) {
      if (a.indexOf(i) === -1) {
        b.push(i);
      } 
    }
    console.log(b);
   
  };
  check()

