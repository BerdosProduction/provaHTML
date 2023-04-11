function none(){
    document.getElementById("ready").disabled=false;  
    document.getElementById("si").style.display="none";
    document.getElementById("no").style.display="none";
    document.getElementById("mainDiv").removeChild(document.getElementById("validità"));
    var errore = document.getElementById('errore');
    var text= document.createElement("h6");
    text.style="color:green";
    text.id="frasina";
    text.appendChild(document.createTextNode("reinserire i dati con attenzione"));
    errore.appendChild(text);
}
function sine(){
    var area=document.createElement("textarea");
    area.style="margin-top:30px; height:200px ; width:200px";
    var areat = document.getElementById('areatesto');
    document.getElementById("si").style.display="none";
    document.getElementById("no").style.display="none";
    document.getElementById("mainDiv").removeChild(document.getElementById("validità"));
    areat.appendChild(area);
    var trasf=document.createElement("input");
    trasf.type="button";
    trasf.value="Fatto";
    trasf.id="finito";
    areat.appendChild(document.createElement("br"));
    areat.appendChild(trasf);
}

function res(){
    if (document.getElementById("nome").value=="" ||document.getElementById("cognome").value==""){
        var errore = document.getElementById('errore');
        errore.innerHTML="";
        var text= document.createElement("h6");
        text.style="color:red";
        text.id="frasina";
        text.appendChild(document.createTextNode("dati non validi, reinserire"));
        errore.appendChild(text);
    }
    else{
        if (document.getElementById("errore").hasChildNodes()){
            document.getElementById("errore").innerHTML="";
        }
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

        
