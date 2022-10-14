//Mi inventario (numero de playeras, sudaderas, sueteres, tazas)
let inventario = [3, 2, 0, 1];
console.log("Aun disponibles:\n",
            inventario[0] + " playeras",
            inventario[1] + " sudaderas",
            inventario[2] + " sueteres",
            inventario[3] + " tazas")

//Mi Carrito
let id_prod = 1;
let carrito = new Array();
let tipo_producto = "";
let precio_prod = 0;
let precioTotal = 0;
let esPrenda = true;

//Tipos de productos (Arreglos)
tallas_disponibles = ["S", "M", "L", "XL"];
colores_disponibes = ["blanco", "negro", "azul", "rojo"];
precios_disponibles = [200, 400, 300, 100]
productos_disponibles = ["playera", "sudadera", "sueter", "taza"]

//Funcion para realizar un pedido nuevo
function nuevoPedido(){
    let codigo = prompt("Ingresa el codigo del producto");
    esPrenda = true;
    return codigo;
}

function agregar_producto(id, price){

    let producto = agregarDetalles(esPrenda);

    if(producto){

        producto.set_id(id_prod);
        producto.set_precio(price)
        id_prod++;

        carrito.push(producto);
        console.log(carrito);

        precioTotal += producto.precio;
        inventario[id-1] --;
        
        console.table(carrito);
        console.log("Aun disponibles:\n",
                    inventario[0] + " playeras",
                    inventario[1] + " sudaderas",
                    inventario[2] + " sueteres",
                    inventario[3] + " tazas")
        

        if(producto.esPrenda){
            alert("Has agregado 1 " + producto.tipo + " talla " + producto.talla + ", color " + producto.color + ", con diseno: " + producto.diseno
            + "\nEl total de tu compra hasta ahora es de: $" + precioTotal + "MXN");
        }else{
            alert("Has agregado 1 " + producto.tipo + ", color " + producto.color + ", con diseno: " + producto.diseno
            + "\nEl total de tu compra hasta ahora es de: $" + precioTotal + "MXN");
        }

    }
}

function agregarDetalles(prenda){

    let check = true;

    while(check){

        let msj = "";

        tipo = tipo_producto;

        if(prenda){
            talla = (prompt("Ingresa la talla (S, M, L, XL)").trim()).toUpperCase();
        }else{
            talla = "-";
        }

        color = (prompt("Ingresa el color (blanco, negro, azul, rojo)").trim()).toLowerCase();
        diseno = prompt("Ingresa el nombre del diseno").trim();

        if(prenda){
            if(!(tallas_disponibles.includes(talla))){
                msj += "\nIngresa una talla correcta";
            }
        }

        if(!(colores_disponibes.includes(color))){
            msj += "\nIngresa un color valido";
        }

        if(!diseno){
            msj += "\nIngresa un diseno";
        }

        if(msj!= ""){

            alert(msj);
            check = confirm("Quieres volver a intentarlo?");
            
        }else{
            return new producto (tipo, color, talla, diseno);
        }
    }

    return false;
}

let retry = false;

window.onload = function(){ 
    setTimeout(()=>{
        do{

            let num_pedido = nuevoPedido();
        
            switch(num_pedido){
        
                case "1" : 
                    tipo_producto = productos_disponibles[0];  
                    precio_prod = precios_disponibles[0]; 
                    if(inventario[num_pedido-1] > 0){
                        agregar_producto(num_pedido, precio_prod);
                    }else{
                        alert("No hay playeras disponibles!")
                    }
                break;
        
                case "2" :
                    tipo_producto = productos_disponibles[1];
                    precio_prod = precios_disponibles[1];
                    if(inventario[num_pedido-1] > 0){
                        agregar_producto(num_pedido, precio_prod);
                    }else{
                        alert("No hay sudaderas disponibles!")
                    }
                break;
        
                case "3" :
                    tipo_producto = productos_disponibles[2];
                    precio_prod = precios_disponibles[2];
                    tipo_producto = "sueter";
                    if(inventario[num_pedido-1] > 0){
                        agregar_producto(num_pedido, precio_prod);
                    }else{
                        alert("No hay sueteres disponibles!")
                    }
                break;
        
                case "4" :
                    tipo_producto = productos_disponibles[3];
                    precio_prod = precios_disponibles[3];
                    if(inventario[num_pedido-1] > 0){
                        esPrenda = false;
                        agregar_producto(num_pedido, precio_prod);
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

