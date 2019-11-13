var array1 = [];


function rev(array1){

var array2=[];
for(i=0;i<array1.length;i++){


array2.unshift(array1[i]);

}

array2.splice(array1.length,0,array1);

document.write(array2+"<br>");

}

rev([6,5,4,3,2,1]);
rev(['d','c','b','a']);