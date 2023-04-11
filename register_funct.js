var elenco={};
function res(){
    if (document.getElementById("nome").value=="" ||document.getElementById("cognome").value==""){
        alert("dati non validi, reinserire");
    }
    else{
        var mainDiv = document.getElementById("mainDiv");
        var text= document.createElement("p");
        var testo= document.createTextNode(" I dati sono giusti?");
        var nome= document.getElementById('nome').value;
        var cognome= document.getElementById('cognome').value;
        text.append(nome+(" "));
        text.append(cognome);
        text.append(document.createElement("br"));
        text.appendChild(testo);
        var btn1=document.createElement("button");
        var btn2=document.createElement("button");
        var testo1= document.createTextNode("SI");
        btn1.appendChild(testo1);
        var testo2= document.createTextNode("NO");
        btn2.appendChild(testo2);
        mainDiv.appendChild(text);
        mainDiv.appendChild(btn1);
        mainDiv.appendChild(btn2);
        elenco.append(bottone1,btn1);
        elenco.append(bottone2,btn2);
        document.getElementById("ready").disabled =true;
    }
}
        
