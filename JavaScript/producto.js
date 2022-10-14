class producto {

    constructor(tipo, color, talla, diseno){

        this.tipo = tipo;
        this.color = color;
        this.talla = talla;
        this.diseno = diseno;
        this.precio = 0;
        this.id = -1;

    }

    set_id(nuevo_id){
        this.id = nuevo_id;
    }

    set_precio(nuevo_precio){
        this.precio = nuevo_precio;
    }
}