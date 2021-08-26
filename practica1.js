function cambiarDolares() {
    let dolarHoy = 102.5
    
    let ingresoPesos=document.getElementById("pesos").value
    resultado=   ingresoPesos / dolarHoy ; 

    let impuestoPais = ingresoPesos * 0.3 ;
    let retencionGanancias = ingresoPesos * 0.35;

    let valorReal;
    valorReal = parseInt(ingresoPesos) + parseInt(impuestoPais) + parseInt(retencionGanancias);

   
    if(resultado<=0){
        alert('El monto ingresado es incorrecto')
    }
        else{
        alert('$'+ ingresoPesos+ ' pesos argentinos son US$'+resultado + '. El impuesto país es de $' + impuestoPais + ' y las retenciones equivalen a $'+ retencionGanancias+' pesos argentinos. El total a pagar por US$' + resultado +' es de $'+ valorReal)
    }


}