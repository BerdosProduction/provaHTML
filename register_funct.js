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
        mainDiv.appendChild(text);
        document.getElementById("si").style.display="block";
        document.getElementById("no").style.display="block";
    }
}
function no(){
    document.getElementById("si").style.display="none";
    document.getElementById("no").style.display="none";
    document.getElementById("ready").disabled=false;
    alert("ciao");
}
        
