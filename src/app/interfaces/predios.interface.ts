export class Predios {
    public id: number;
    public productor: string;
    public predio: string;
    
    constructor(
            id: number,
            productor: string,
            predio: string

    ) {
        this.id = id;
        this.productor = productor;
        this.predio = predio;

    }
}