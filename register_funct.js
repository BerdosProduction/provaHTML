function res(){
    if (document.getElementById("nome").value=="" ||document.getElementById("cognome").value==""){
        alert("dati non validi, reinserire");
    }
    else{
        var mainDiv = document.getElementById('mainDiv');
        var text= document.createElement("p");
        var testo= document.createTextNode(" I dati sono giusti?");
        var nome= document.getElementById('nome').value;
        var cognome= document.getElementById('cognome').value;
        var bottone= document.getElementById('ready');

        bottone.disabled=true;
        text.append(nome+(" "));
        text.append(cognome);
        text.append(document.createElement("br"));
        text.appendChild(testo);
        var btn1=document.createElement("button");
        var btn2=document.createElement("button");
        btn1.id='si';
        btn2.id='no';
        
        var testo1= document.createTextNode("SI");
        btn1.appendChild(testo1);
        var testo2= document.createTextNode("NO");
        btn2.appendChild(testo2);
        mainDiv.appendChild(text);
        mainDiv.appendChild(btn1);
        mainDiv.appendChild(btn2);
    }
}
var btn_1=document.getElementById('si');
btn_1.addEventListener("click", function del1(){
    alert("ciao");
});
        
