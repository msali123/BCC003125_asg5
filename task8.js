

var i_date = prompt("Enter Birth Date in this format 'Jan 01, 1970'");
function birthdate(i_date) {
var today = new Date();
var t_date = today.getDate();
var t_month = today.getMonth()+1;
var t_year = today.getFullYear();


var birth_date = new Date(i_date);
var b_date = birth_date.getDate();
var b_month = birth_date.getMonth()+1;
var b_year = birth_date.getFullYear();
console.log(t_year-b_year+" Years -");
if((t_month-b_month) === 0){
    console.log("0 Months -");
   
}
else{
    console.log((t_month-b_month)+" Months -");
    
}

if((t_date-b_date)=== 0){
    console.log("0 Days -");
   
}
else{
    console.log((t_date-b_date)+" Days -");
    
}

}

var fun_birth = new birthdate(i_date);

