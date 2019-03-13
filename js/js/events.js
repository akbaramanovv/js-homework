

function changeStyle(){
   
    let color = document.getElementById('inputColor').value
    document.getElementsByClassName('itemm')[inputRow()].style.backgroundColor = color;
   
}


function inputRow(){
   
    let count = document.getElementById('countt').value;
    if(count>5){
        alert("error")
    }
  
    let n = count-1;
  

      
    return n;
    

}
