function none(){
    document.getElementById("ready").disabled=false;  
    document.getElementById("si").style.display="none";
    document.getElementById("no").style.display="none";
    document.getElementById("mainDiv").removeChild(document.getElementById("validità"));
}
function sine(){
    var area=document.createElement("textarea");
    area.style="height:200px ; width:200px";
    var mainDiv = document.getElementById('areatesto');
    mainDiv.appendChild(area);
}

function res(){
    if (document.getElementById("nome").value=="" ||document.getElementById("cognome").value==""){
        var errore = document.getElementById('errore');
        var text= document.createElement("h6");
        text.style="color:red";
        text.appendChild(document.createTextNode("dati non validi, reinserire"));
        errore.appendChild(text);
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
        text.id="validità";
        mainDiv.appendChild(text);
        document.getElementById("si").style.display="block";
        document.getElementById("no").style.display="block";
    }
}

        
