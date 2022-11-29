export class Estudiante {
    id: number;
    nombre: string;
    apellido: string;
    fechaNacimiento: Date;
    isTop10: boolean;

    constructor(id: number, nombre: string, apellido: string, fechaNacimiento: Date, isTop10: boolean) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.fechaNacimiento = fechaNacimiento;
        this.isTop10 = isTop10;
    }
}