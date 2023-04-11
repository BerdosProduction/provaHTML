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
        var btn1=document.createElement("input");
        var btn2=document.createElement("input");
        btn1.id='si';
        btn2.id='no';
        btn1.type="button";
        btn2.type="button";
        mainDiv.appendChild(text);
        mainDiv.appendChild(btn1);
        mainDiv.appendChild(btn2);
    }
}
var btn_1=document.getElementById('si');
btn_1.addEventListener("click", function del1(){
    alert("ciao");
});
        
