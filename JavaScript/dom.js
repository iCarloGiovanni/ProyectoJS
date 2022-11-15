// localStorage.clear();

let inventario = [8, 6, 4, 2];
let contadorCarrito = document.getElementById("noArticulos");
let idEliminar = 0;
let array_productos = new Array();

const url = './JavaScript/ListaDeProductos.json';
obtenerProductos();

let carritoContent = document.getElementById("carritoContent");
let carrito = new Array();
let id_prod = 0;

let precioTotal = document.getElementById("precioTotal");
let playerasDis = document.getElementsByTagName("figcaption");

//recuperar inventario de la memoria local
let InventarioRecuperado = localStorage.getItem('inventarioGuardado');
if(InventarioRecuperado){
    inventario = JSON.parse(InventarioRecuperado);
}

//recuperar carrito de la memoria local
let carritoRecuperado = localStorage.getItem('carritoGuardado');
if(carritoRecuperado){
    carrito = JSON.parse(carritoRecuperado);
    calcularTotal();
    showCarrito();
    actualizarBadge();
    removeFromCart();
}

//Mostrar el numero de disponibles
for(let i=0; i<playerasDis.length; i++){
    playerasDis[i].innerText = "Disponibles: " + inventario[i];
}

//Evento onClick en el producto para agregarlo al carrito
let imgProd = document.getElementsByClassName("prod");

for(let i=0; i<imgProd.length; i++){
    imgProd[i].addEventListener("click", addToCart);
}

//Aumentar value del carrito
function addToCart(){

    //OnClick en imagenes
    for(let i =0; i<imgProd.length; i++){

        //decrecer disponibles
        imgProd[i].onclick = function(){
            if(inventario[i]>0){
                inventario[i]--;
                playerasDis[i].innerText = "Disponibles: " + inventario[i];

                //Crear un card nuevo dentro del carrito con sus caracteristicas
                let tallaSelec = document.getElementById("talla").value;
                let colorSelec = document.getElementById("color").value;
                let disenoSelec = document.getElementById("diseno").value;

                let imgCard = array_productos[i].imagen;
                let nombreCard = array_productos[i].tipo;
                let precioCard = array_productos[i].precio;

                let productoSeleccionado =new producto (imgCard, nombreCard, colorSelec, tallaSelec, disenoSelec, precioCard);

                productoSeleccionado.set_id(carrito.length);

                carrito.push(productoSeleccionado);
                console.table(carrito);

                calcularTotal();

                showCarrito();

                removeFromCart();

                actualizarBadge();

                guardarInventario();
                
            }else{
                alert("No quedan articulos disponiles!")
            }
        }
    }
}

 function showCarrito(){

    carritoContent.innerHTML = ""

    for(i=0; i<carrito.length; i++){
        let card = document.createElement("div");
        card.className = "bloqueProducto"
        card.innerHTML = `<img class="imgProd" src="img/`+carrito[i].imagen+`" alt="producto">
        <h2 class="nombreProd">`+carrito[i].tipo+`</h2>
        <h3 class="precioProd">$`+carrito[i].precio+`.00</h3>
        <p class="detallesProd">Color: `+carrito[i].color+` - Talla: `+carrito[i].talla+` - Diseno: `+carrito[i].diseno+`</p>
        <button type="button" class="btn-quitar" id=`+i+`>X</button>`;
        carritoContent.append(card);
    }
 }

 function calcularTotal(){
    let sumaTotal = 0;
    for(i=0; i<carrito.length; i++){
        sumaTotal += carrito[i].precio;
    }
    precioTotal.innerText = ("$" +sumaTotal + ".00");
 }

 function guardarInventario(){
    let inventarioEnLS = JSON.stringify(inventario);
    localStorage.setItem('inventarioGuardado', inventarioEnLS);

    let guardarCarrito = (clave, valor)=>{
        localStorage.setItem(clave,valor);
    }

    guardarCarrito('carritoGuardado', JSON.stringify(carrito));
 }

 function actualizarBadge(){
    contadorCarrito.setAttribute("value", carrito.length);
 }

 function removeFromCart(){

    let botonQuitar = document.getElementsByClassName("btn-quitar");
    
    for(let i=0; i<botonQuitar.length; i++){
        botonQuitar[i].addEventListener("click", function(){

            regresarAlInventario(i);

            let deleteID = botonQuitar[i].id;
            let carritoActualizado = carrito.filter((p)=> p.id != deleteID);
            carrito = carritoActualizado;

            for(j=0; j<carrito.length; j++)
            {
                carrito[j].id = j;
            }

            showCarrito();

            calcularTotal();
            
            removeFromCart();

            actualizarBadge();

            guardarInventario();

            console.table(carrito);

        } ); 
    }

    if(carrito.length>0){
        contadorCarrito.setAttribute("value", carrito.length);
    }
 }

// PARA RECUPERAR QUITADOS DEL CARRRITO AL INVENTARIO
function regresarAlInventario(x){
    
    let devuelto = carrito[x].tipo;

    switch(devuelto){

        case "Playera":
            inventario[0]++;
            playerasDis[0].innerText = "Disponibles: " + inventario[0];
        break;

        case "Sudadera":
            inventario[1]++;
            playerasDis[1].innerText = "Disponibles: " + inventario[1];
        break;

        case "Sueter":
            inventario[2]++;
            playerasDis[2].innerText = "Disponibles: " + inventario[2];
        break;

        case "Taza":
            inventario[3]++;
            playerasDis[3].innerText = "Disponibles: " + inventario[3];
        break;
        }
}

//FETCH 
function obtenerProductos(){
    fetch(url)
    .then((response) => response.json())
    .then((data) => {

        array_productos = data.productos;
    })
}





