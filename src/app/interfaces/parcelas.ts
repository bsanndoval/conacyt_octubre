export class Parcelas {
    public id: number;
    public id_predio: number;
    public predio: string;
    public tipo: string;
    public anio: number;
    
    constructor(
            id: number,
            id_predio:number,
            predio: string,
            tipo: string,
            anio: number

    ) {
        this.id = id;
        this.id_predio = id_predio;
        this.predio = predio;
        this.tipo = tipo;
        this.anio = anio;

    }
}
