var amount = parseInt(prompt("Enter the amount you wish to withdraw"));

if(amount>=10){

var h = Math.floor(amount / 100);
console.log("there can be "+h+" notes of 100 ");


var f=Math.floor((amount - (h*100))/50);
console.log("there can be "+f+" notes of 50 ");


var t = Math.floor((amount - (h*100)-(f*50) )/10); 
console.log("there can be "+t+" notes of 10 ");


}
else{
    console.log("amount is less than 10");
}

