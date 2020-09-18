//Declaración de variables

var nombreUsuario = "Micaela Fuentes";
var saldoCuenta = 12500;
var limiteExtraccion = 3000;
var dinero = saldoCuenta;
var nuevoSaldo;
var montoAExtraer;
var agua = 350;
var luz = 210;
var telefono = 425;
var internet = 570;
var cuentaAmigaUno = 1234567;
var cuentaAmigaDos = 7654321;
var saldoAnterior; 
var codigoCuenta = 1234;
var dolar = parseInt(45,30) ; 
var redBus = 20
//Ejecución de las funciones que actualizan los valores de las variables en el HTML.

window.onload = function() {
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();

}

//Funciones que tenes que completar

var sumarDinero = dineroSumar => {
    var resultadoSuma = dineroSumar + dinero
    return resultadoSuma
}

var restarDinero = dineroRestar => {
    var resultadoResta = saldoCuenta - dineroRestar
    return resultadoResta 
}

var cambiarLimiteDeExtraccion = () => {
    var cambiarLimite = (parseInt(prompt("¿Qué monto desea que sea el nuevo limite de extracción?")||0))
    limiteExtraccion = cambiarLimite
    actualizarLimiteEnPantalla(limiteExtraccion);
    return alert("Su nuevo límite de extacción es: "+"$"+limiteExtraccion+"\n")
    
}
var haySaldoDisponible = ()=>{
    if ((montoAExtraer < saldoCuenta)){
        return true
    }else{
        return false
    }
}
var multiplosDeCien = ()=>{
    if (montoAExtraer % 100 == 0){
        return true
    }else{
        return false
    }
}
var superaLimiteExtracción = ()=>{
    if (montoAExtraer > limiteExtraccion) {
        return true
    }else{
        return false
    }
}
var extraerDinero = () => {
    saldoAnterior = saldoCuenta;
    montoAExtraer = parseInt(prompt("¿Qué monto desea extraer?")) || 0
        
    if  (superaLimiteExtracción()==true) {
        alert ("El monto indicado ha superado el limite de extracción");
    } else if (multiplosDeCien()==false) {
        alert ("Este cajero solo entrega billetes de $100");
    } else if (haySaldoDisponible()==true){
        nuevoSaldo = restarDinero(montoAExtraer);
        saldoCuenta = nuevoSaldo
        actualizarSaldoEnPantalla(saldoCuenta);
        return alert("Has extraido: "+"$"+montoAExtraer+"\n"
        +"Saldo anterior: "+"$"+saldoAnterior+"\n"+
        "Saldo actual: "+"$"+saldoCuenta)
    }else{
         alert ("No posee fondos suficientes para realizar la operación");
    }
}

var depositarDinero = () => {
    var saldoAnterior = saldoCuenta;
    var montoADepositar = parseInt(prompt("¿Qué monto desea depositar?")||0)
    nuevoSaldo = sumarDinero(montoADepositar);
    saldoCuenta = nuevoSaldo
    actualizarSaldoEnPantalla(saldoCuenta);
    return alert("Has depositado: "+"$"+montoADepositar+"\n"
    +"Saldo anterior: "+"$"+saldoAnterior+"\n"+
    "Saldo actual: "+"$"+saldoCuenta)
}
var efectuarPagoServicio = serv =>{
    if (serv < saldoCuenta){
        saldoAnterior = saldoCuenta
        nuevoSaldo = restarDinero(serv);
        saldoCuenta = nuevoSaldo
        alert("Has pagado el servicio correctamente:" +"\n"+
        "Saldo anterior"+"$"+saldoAnterior+"\n"
        +"Dinero descontado: "+"$"+serv+"\n"+
        "Saldo actual: "+"$"+saldoCuenta)
        actualizarSaldoEnPantalla(saldoCuenta);}
    else{
        alert("Fondos insuficientes para realizar la operación")}
}

var pagarServicio = () => {
    var quePagara = (parseInt(prompt("Ingrese el número que corresponda con el servicio que queres pagar"+"\n"+
    "1 - Agua"+"\n"+
    "2 - Luz"+"\n"+
    "3 - Internet"+"\n"+
    "4 - Teléfono")||0))
    switch (quePagara){
        case 1:
                efectuarPagoServicio(agua);
                break;
        case 2:
                efectuarPagoServicio(luz);
                break;
        case 3:
                efectuarPagoServicio(internet);
                break;
        case 4:
               efectuarPagoServicio(telefono);
                break;
        default:
            alert("El valor ingresado no corresponde a una operación disponible")
    }
} 

var comprarDolares = () => {
    eleccionMontoDolar =  (parseInt(prompt("Ingrese el monto que desea comprar"+"\n"+
    "Divisa           "+"Cotización para la compra       "+"Cotización para la venta"+"\n"+
    " Dolar         "+"          43,31           "+"                                  45,29   ")||0))
   
   var cantidadDolares = eleccionMontoDolar*dolar
   if (cantidadDolares < saldoCuenta){
        saldoAnterior = saldoCuenta
        nuevoSaldo = restarDinero(cantidadDolares);
         saldoCuenta = nuevoSaldo
        alert("Usted ha comprado USD"+eleccionMontoDolar+" con éxito"+"\n"+
        "Serán depositados en su cuenta de ahorro en dólares.")
        actualizarSaldoEnPantalla(saldoCuenta);
   }else{
       alert("No posee fondos suficientes para realizar la operación")
   }
    }

var cargarRedBus = () => {
        alert("Tu saldo actual es $"+redBus)
        var montoDeCarga = parseInt(prompt("Ingrese el monto que desea cargarle a su tarjeta Red Bus asociada")||0)
       
        if (montoDeCarga<saldoCuenta){
            saldoAnterior = saldoCuenta
            nuevoSaldo = restarDinero(montoDeCarga);
            saldoCuenta = nuevoSaldo;
            redBus = redBus + montoDeCarga
            alert("Su carga ha sido realizada con éxito. Su saldo actual es de $" +redBus)
            actualizarSaldoEnPantalla();
        }else{
            alert("No posee fondos suficientes para realizar la operación")
        }}




    
var transferirDinero = () => {

    var moneyTransfer = parseInt(prompt("¿Qué monto desea transferir?")||0)
    if (moneyTransfer < saldoCuenta){
        var laCuenta = parseInt(prompt("Ingrese el número de cuenta al que desea realizar la transferencia")||0);
            if((laCuenta===cuentaAmigaUno)||(laCuenta===cuentaAmigaUno)){
                        saldoAnterior = saldoCuenta;
                        nuevoSaldo = restarDinero(moneyTransfer);
                        saldoCuenta = nuevoSaldo
                        actualizarSaldoEnPantalla(saldoCuenta);
                        alert ('La transferencia ha sido realizada con exito a la Cuenta Amiga')}
                        
              else{
                    alert ("Cuenta inválida. Solicite agregar una cuenta amiga en la sucursal de banco más cercana")
                }
    }else  {
        alert("Fondos insuficientes para realizar la operación");
    }}

var iniciarSesion = () => {
    var ingreseCodigo = parseInt(prompt("Ingrese el código de su cuenta")||0)
    if (ingreseCodigo === codigoCuenta){
        alert("Bienvenida/o "+nombreUsuario+". Ya puedes comenzar a realizar operaciones");
    }else{
        saldoCuenta = 0
        saldoAnterior = 0
        alert("Código incorrecto. Tu dinero ha sido retenido por cuestiones de seguridad.")
        actualizarSaldoEnPantalla(); }
    }
iniciarSesion();
   
//Funciones que actualizan el valor de las variables en el HTML
    function cargarNombreEnPantalla() {
        document.getElementById("nombre").innerHTML = "Bienvenida " + nombreUsuario;
    }
    
    function actualizarSaldoEnPantalla() {
        document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
    }
    
    function actualizarLimiteEnPantalla() {
        document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
    }









