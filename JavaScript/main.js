//Mi inventario
let num_playeras = 3;
let num_sudaderas = 2;
let num_sueteres = 0;
let num_tazas = 1;
let esPrenda = true;

//Precios
const precioPlayera = 200;
const precioSudadera = 400;
const precioSueter = 300;
const precioTaza = 100;
let precioTotal = 0;

//Funcion para realizar un pedido nuevo
function nuevoPedido(){
    let codigo = prompt("Ingresa el codigo del producto");
    let talla = "-";
    let color = "-";
    let diseno = "-";
    esPrenda = true;
    return codigo;
}

function agregarDetalles(){
    if(esPrenda){
        talla = prompt("Ingresa la talla (S, M, L, XL)");
    }
    color = prompt("Ingresa el color");
    diseno = prompt("Ingresa el nombre del diseno");
}

let retry = false;

window.onload = function(){ 
    setTimeout(()=>{
        do{
            let num_pedido = nuevoPedido();
        
            switch(num_pedido){
        
                case "1" : 
                    if(num_playeras > 0){
                        agregarDetalles();
                        precioTotal += precioPlayera;
                        num_playeras--;
                        console.log(num_playeras + " playeras restantes");
                        alert("has agregado 1 playera talla " + talla + ", color " + color + ", con diseno: " + diseno
                        + "\nEl total de tu compra hasta ahora es de: $" + precioTotal + "MXN");
        
                    }else{
                        alert("No hay playeras disponibles!")
                    }
                break;
        
                case "2" :
                    if(num_sudaderas > 0){
                        agregarDetalles();
                        precioTotal += precioSudadera;
                        num_sudaderas--;
                        console.log(num_sudaderas + " sudaderas restantes");
                        alert("has agregado 1 sudadera talla " + talla + ", color " + color + ", con diseno: " + diseno
                        + "\nEl total de tu compra hasta ahora es de: $" + precioTotal + "MXN");
        
                    }else{
                        alert("No hay sudaderas disponibles!")
                    }
                break;
        
                case "3" :
                    if(num_sueteres > 0){
                        agregarDetalles();
                        precioTotal += precioSueter;
                        num_sueteres--;
                        console.log(num_sueteres + " sueteres restantes");
                        alert("has agregado 1 sueter talla " + talla + ", color " + color + ", con diseno: " + diseno
                        + "\nEl total de tu compra hasta ahora es de: $" + precioTotal + "MXN");
        
                    }else{
                        alert("No hay sueteres disponibles!")
                    }
                break;
        
                case "4" :
                    if(num_tazas > 0){
                        esPrenda = false;
                        agregarDetalles();
                        precioTotal += precioTaza;
                        num_tazas--;
                        console.log(num_tazas + " tazas restantes");
                        alert("has agregado 1 taza color " + color + ", con diseno: " + diseno
                        + "\nEl total de tu compra hasta ahora es de: $" + precioTotal + "MXN");
        
                    }else{
                        alert("No hay tazas disponibles!")
                    }
                break;
        
                default: alert("No hay productos con ese codigo!");
            }
        
            retry = confirm("Quieres agregar otro pedido?");
        
        }while(retry);
        
        if(precioTotal > 1){
            alert("El total de tu compra es de: $" + precioTotal + "MXN");
        }else{
            alert("Gracias por tu visita!");
        }        
    },100)
}

