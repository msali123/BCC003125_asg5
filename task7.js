function weekend(date) {


var d = new Date(date);

var dateValue = d.getDay(); 
if(dateValue == 0 || dateValue == 6){
    document.write(" Its weekend <br>");
}
    else{

        document.write( "Sorry! wait for " + (7-dateValue) +" days <br>");
    }
}

weekend('Nov 09, 2019');
weekend('Nov 12, 2019');
weekend('Nov 11, 2019');
weekend('Nov 10, 2019');