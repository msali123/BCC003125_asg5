
//In this task we were asked to Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables

function calArea(width,height)//ii. Arguments as variables have been passed
{

    var ar = width * height;
  
    return ar;
}

var func = new calArea();
console.log(calArea(6,4));// i. Arguments as value have been passed here