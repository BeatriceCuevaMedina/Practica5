var btn=document.getElementById('btn');
var hora=document.getElementById('hora');
var valor="";
contador=0;

function abrirVent(){
    if(contador==0){
        var total=0;
        valida();
        document.getElementById("vent").style.display="block";
        document.getElementById("blur").style.filter="blur(5px)";
        document.getElementById("blur").style.userSelect="none";
        contador=1;
        var ventana=document.getElementById("mostrado");
        ventana.innerHTML=hora.value;
        obtenerValor();
        if(valor==="direc"){
            total=15*parseInt(hora.value)*30;
        }
        if(valor==="medio"){
            total=12*parseInt(hora.value)*30;
        }
        if(valor==="super"){
            total=10*parseInt(hora.value)*30;
        }
        if(valor==="tecn"){
            total=7*parseInt(hora.value)*30;
        }
        if(valor==="oper"){
            total=4*parseInt(hora.value)*30;
        }
        ventana.innerHTML=total;
        document.getElementById("formu").reset();
    }
    else{
        document.getElementById("blur").style.filter="none";
        document.getElementById("vent").style.display="none";
        contador=0;
    }
}
function obtenerValor(){
    valor=document.getElementById("list").value;
}
function valida(){
    var hora=document.getElementById('hora').value;
    if(hora==""){
        alert("Todos los datos son obligatorios");
        
    }
}

function borroso(){
    var blur=document.getElementById('blur');
    blur.classList.borroso('active');
}

btn.addEventListener('click',abrirVent,true);