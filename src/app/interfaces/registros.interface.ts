export class Registros {
    public id: number;
    public id_parcela: number;
    public tipo: string;
    public etapa: string;
    public fecha: Date;
    public actividad: string;
    public categoria: string;
    public arvenses: boolean;
    public practica: number;
    public unidad: string;
    public cantidad: number;
    public precio: number;
    public observaciones: string;
    public incidencias: string;
    public muestreo: number;
    
    constructor(
        id: number,
        id_parcela: number,
        tipo: string,
        etapa: string,
        fecha: Date,
        actividad: string,
        categoria: string,
        arvenses: boolean,
        practica: number,
        unidad: string,
        cantidad: number,
        precio: number,
        observaciones: string,
        incidencias: string,
        muestreo: number

    ) {
        
        this.id =  id;
        this.id_parcela=id_parcela;
        this.tipo= tipo;
        this.etapa = etapa;
        this.fecha =  fecha;
        this.actividad= actividad;
        this.categoria= categoria;
        this.arvenses =arvenses;
        this.practica = practica;
        this.unidad= unidad;
        this.cantidad= cantidad;
        this.precio= precio;
        this.observaciones = observaciones;
        this.incidencias= incidencias;
        this.muestreo =muestreo;

    }
}