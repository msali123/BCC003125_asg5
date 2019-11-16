
function gam(){

var count = 0;

    do{
    var rand = Math.floor(Math.random()*100+1);
            if(count !== 3){
                console.log(rand);
                var user_inp = parseInt(prompt("Enter The Number"));
            
                if(rand == user_inp){
                    console.log("You are right, You won");
                    }
                
                else{
                count = count+1;
                console.log("Try Again");
                       }

            }
        else{
            var t_again = prompt("Do You Want To Try Again");
            if(t_again == "Yes"){
                var try_again = new gam();

            }
            else if(t_again == "No"){
                console.log("Thank you for playing with us today");
                break;
            }
            else{
                break;
            }

        }


}
    while(count<=3){

    }
}
var fun_gam = new gam();

