
document.addEventListener("DOMContentLoaded", function(event) { 
run();
function run(){
    
var sel;
var j = 0;
var arr = [];
var k = 0;
var rand = [];
var l = 4;
var num = (l*l);

    function shuffle(array) {
        array.sort(() => Math.random() - 0.5);
    }

    for(var i = 1; i<num+1;i++ ){
        rand.push(i);
    }

    console.log(shuffle(rand));

    for(var i=0; i < l; i++) {
        var data = [];
        for(var j = 0; j < l; j++){
            data.push(rand[k].toString());
            k++;
        }
            arr.push(data);
    }
    console.log(arr);
    recreate();

table = document.getElementById("table");
   
//fill the table cells with array
function recreate(){
    for(var i = 0; i < l; i++)  
    {
      for(var j = 0; j < l; j++)
      {
         table.rows[i].cells[j].id = arr[i][j];

        //console.log(table.rows[i].cells[j].id);

          if(arr[i][j] == num.toString()){
            table.rows[i].cells[j].innerHTML = " ";
          }else{
            table.rows[i].cells[j].innerHTML = arr[i][j];
          }
        }
    
    }
    select(num.toString());
}
    
    
    //mouse movements
    document.querySelectorAll('#table td').forEach(e => e.addEventListener("click", function() {
        //console.log(j);
        check();
        sel = e.id;
        var comp = getArrayIndex(arr,sel);
        select(sel);
        var index = getArrayIndex(arr,num.toString());
        a = index[0];
        b = index[1];
    
        //check if neighour
        if(comp[0]==a-1&&comp[1]==b||comp[0]==a&&comp[1]==b-1||comp[0]==a&&comp[1]==b+1||comp[0]==a+1&&comp[1]==b){
            console.log("neighbour");
            swap(sel);
        }

    }));

    //keyboard use
    document.onkeydown = function(e) { 
        var start = getArrayIndex(arr,num.toString());
        check();
    try {
        switch (e.keyCode) { 
            case 37: 
                console.log("left");
                a = start[0];
                b = start[1];
                sel = arr[a][b+1];
                select(sel);
                swap(sel);
                break; 
            case 38: 
                console.log("up");
                a = start[0];
                b = start[1];
                
                sel = arr[a+1][b];
                select(sel);
                swap(sel);
                break; 
            case 39: 
                console.log("right");
                a = start[0];
                b = start[1];
                sel = arr[a][b-1];
                select(sel);
                swap(sel);
                break; 
            case 40: 
                console.log("down");
                a = start[0];
                b = start[1];
                sel = arr[a-1][b];
                select(sel);
                swap(sel);
                break; 
        } 
            
    } catch (error) {

        select(num.toString());
    }
        
    }; 

//select tile/cell
function select(sel){
    try {
        for(var i=0; i<l; i++) {
            for(var j = 0; j < l; j++){
                document.getElementById(arr[i][j]).style.backgroundColor = "black";  
                document.getElementById(arr[i][j]).style.color = "white"; 
            }
        }
        document.getElementById(sel).style.backgroundColor = null;  
        document.getElementById(sel).style.color = "white";
    } catch (error) {
        document.getElementById(num.toString()).style.backgroundColor = null;  
        document.getElementById(num.toString()).style.border = null;  

    }
    
}

//swap function
function swap(b){
    try {
    ar = getArrayIndex(arr,num.toString());
    cr = ar;
    br = getArrayIndex(arr,b);
    console.log(br);
    arr[ar[0]][ar[1]]= arr[br[0]][br[1]];
    arr[br[0]][br[1]]= num.toString();

    recreate();
    console.log(arr);
    } catch (error) {
        select(num.toString());
    }
    
}

//get array index of any cell
function getArrayIndex(arr,val){
    for(i = 0; i<arr.length; i++){
        for(j = 0; j<arr.length;j++){
            if(document.getElementById(arr[i][j]).id  == val){
                console.log(i+","+j+","+document.getElementById(arr[i][j]).id);
                return [i,j];
            }
        }
    }
   
}

document.getElementById("reset").addEventListener("click", function(){
    run();
});


document.getElementById("check").addEventListener("click", function(){
    check();
});

function check(){
    var g = 1;
    var ch = 0;
    for(i = 0; i<arr.length; i++){
        for(j = 0; j<arr.length;j++){
            if(arr[i][j] == g){
                ch++;
            }else{
                break;
            }
            g++;
        }
    }
    if(ch >= num-1){
        document.getElementById("progress").innerHTML = "CONGRATULAIONS";
    }else{
        document.getElementById("progress").innerHTML = " ";
    }
}

}
});
