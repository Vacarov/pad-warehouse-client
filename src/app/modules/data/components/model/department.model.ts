export class Departement {

    id: number;
    name: string;

    constructor(department: any) {
        department = department || {};
        this.id = department.id;
        this.name = department.name;
    }
}
