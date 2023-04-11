function changecolor(){
    var col= document.getElementById("colore").value;
    var img=document.getElementById("jotaro");
    img.style="border:solid "+col+" 5px";
}
function changedim(){
    var range= document.getElementById("dimensione").value;
    var img=document.getElementById("jotaro");
    var x=(range*500)/100;
    img.height=x;
    img.width=x*1.78;
}