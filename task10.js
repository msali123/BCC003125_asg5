var text = "Sameeeeer";

function c_Vowels(text) {

var count=0;
var vowel = ["a","e","i","o","u"];

for(i = 0;i <=text.length;i++){
    
    for(j=0;j<=vowel.length;j++){

        if(text.charAt(i) === vowel[j])
        {
         count++;     
        }
        else{
        
        }
      }       
    
   }
   console.log("There are "+count+" vowels");
}

var fn = new c_Vowels(text);