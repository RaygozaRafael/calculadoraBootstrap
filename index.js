const validarNumero = (a) => {
    if(isNaN(a) || a === undefined){
        return false;
    }
    else{
        return true;
    }
}

function suma(){
    document.getElementById('operador').innerHTML = "+"
    let n1 = document.getElementById('numero1').value;
    let n2 = document.getElementById('numero2').value;
    n1 = Number(n1);
    n2 = Number(n2);
    document.getElementById('numero1').style.backgroundColor = 'white';
    document.getElementById('numero2').style.backgroundColor = 'white';
    if(validarNumero(n1) && validarNumero(n2)){
        let resultado = (n1+n2).toFixed(4)
        console.log("Hola suma " + resultado);
        document.getElementById('resultado').value = resultado;
    }
    else{
        if(!validarNumero(n1) && !validarNumero(n2)){
            document.getElementById('resultado').value = "error";
            document.getElementById('numero1').style.backgroundColor = 'pink';
            document.getElementById('numero2').style.backgroundColor = 'pink';
        }
        else if(!validarNumero(n1)){
            document.getElementById('resultado').value = "error";
            document.getElementById('numero1').style.backgroundColor = 'pink';
        }
        else{
            document.getElementById('resultado').value = "error";
            document.getElementById('numero2').style.backgroundColor = 'pink';
        }
    }
    
}

function resta(){
    document.getElementById('operador').innerHTML = "-"
    let n1 = document.getElementById('numero1').value;
    let n2 = document.getElementById('numero2').value;
    n1 = Number(n1);
    n2 = Number(n2);
    document.getElementById('numero1').style.backgroundColor = 'white';
    document.getElementById('numero2').style.backgroundColor = 'white';
    if(validarNumero(n1) && validarNumero(n2)){
        let resultado = (n1-n2).toFixed(4)
        console.log("Hola resta " - resultado);
        document.getElementById('resultado').value = resultado;
    }
    else{
        if(!validarNumero(n1) && !validarNumero(n2)){
            document.getElementById('resultado').value = "error";
            document.getElementById('numero1').style.backgroundColor = 'pink';
            document.getElementById('numero2').style.backgroundColor = 'pink';
        }
        else if(!validarNumero(n1)){
            document.getElementById('resultado').value = "error";
            document.getElementById('numero1').style.backgroundColor = 'pink';
        }
        else{
            document.getElementById('resultado').value = "error";
            document.getElementById('numero2').style.backgroundColor = 'pink';
        }
    }
}

function producto(){
    document.getElementById('operador').innerHTML = "*"
    let n1 = document.getElementById('numero1').value;
    let n2 = document.getElementById('numero2').value;
    n1 = Number(n1);
    n2 = Number(n2);
    document.getElementById('numero1').style.backgroundColor = 'white';
    document.getElementById('numero2').style.backgroundColor = 'white';
    if(validarNumero(n1) && validarNumero(n2)){
        let resultado = (n1*n2).toFixed(4)
        console.log("Hola producto " * resultado);
        document.getElementById('resultado').value = resultado;
    }
    else{
        if(!validarNumero(n1) && !validarNumero(n2)){
            document.getElementById('resultado').value = "error";
            document.getElementById('numero1').style.backgroundColor = 'pink';
            document.getElementById('numero2').style.backgroundColor = 'pink';
        }
        else if(!validarNumero(n1)){
            document.getElementById('resultado').value = "error";
            document.getElementById('numero1').style.backgroundColor = 'pink';
        }
        else{
            document.getElementById('resultado').value = "error";
            document.getElementById('numero2').style.backgroundColor = 'pink';
        }
    }
}

function division(){
    document.getElementById('operador').innerHTML = "/"
    let n1 = document.getElementById('numero1').value;
    let n2 = document.getElementById('numero2').value;
    n1 = Number(n1);
    n2 = Number(n2);
    document.getElementById('numero1').style.backgroundColor = 'white';
    document.getElementById('numero2').style.backgroundColor = 'white';
    if(validarNumero(n1) && validarNumero(n2)){
        let resultado = (n1/n2).toFixed(4)
        console.log("Hola division " / resultado);
        document.getElementById('resultado').value = resultado;
    }
    else{
        if(!validarNumero(n1) && !validarNumero(n2)){
            document.getElementById('resultado').value = "error";
            document.getElementById('numero1').style.backgroundColor = 'pink';
            document.getElementById('numero2').style.backgroundColor = 'pink';
        }
        else if(!validarNumero(n1)){
            document.getElementById('resultado').value = "error";
            document.getElementById('numero1').style.backgroundColor = 'pink';
        }
        else{
            document.getElementById('resultado').value = "error";
            document.getElementById('numero2').style.backgroundColor = 'pink';
        }
    }
}