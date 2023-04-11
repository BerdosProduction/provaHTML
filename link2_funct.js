function changecolor(){
    var color= document.getElementById("colore").value;
    var img=document.getElementById("jotaro");
}
function changedim(){
    var range= document.getElementById("dimensione").value;
    var img=document.getElementById("jotaro");
    var x=(range*250)/100;
    img.height=x;
    img.width=x;

}