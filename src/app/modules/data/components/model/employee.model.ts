export class Employee {

    id: number;
    name: string;

    constructor(employee: any) {
        employee = employee || {};
        this.id = employee.id;
        this.name = employee.name;
    }
}
