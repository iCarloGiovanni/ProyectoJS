class producto {

    constructor(imagen, tipo, color, talla, diseno, precio){

        this.imagen = imagen;
        this.tipo = tipo;
        this.color = color;
        this.talla = talla;
        this.diseno = diseno;
        this.precio = precio;
        this.id = -1;

    }

    set_id(nuevo_id){
        this.id = nuevo_id;
    }
}