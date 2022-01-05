
let promises = new Promise((x,y) => {
    let stat=false;
    if(stat){
       x("success");                //Promise { 'success' }
                                    //success
    } else {
        y("rejected");               //Promise { <rejected> 'rejected' }
                                     //</rejected>/rejected
    }
});

promises.then(data => console.log("data",data))
.catch(err => console.log(err))

console.log(promises);                     //Promise { <pending> }

