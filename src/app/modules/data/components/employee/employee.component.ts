import {Component, Input} from '@angular/core';
import {DataService} from '../../data.service';
import {FormsModule} from '@angular/forms';

@Component({
    selector: 'app-employee',
    templateUrl: './employee.component.html',
    styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent {

    employees: any;
    pageResult: any;

    @Input() pageIndex = 0;
    @Input() pageSize = 2;

    constructor(private dataService: DataService) {
        this.getEmployees(this.pageIndex, this.pageSize);
    }

    /**
     * @param {number} page
     * @param {number} count
     */
    public getEmployees(page: number, count: number) {
        this.dataService.getEmployees(page, count).subscribe(
            result => {
                this.employees = result._embedded.employeeResourceList;
                this.pageResult = result.pageResult;
            }
        );
    }

    public deleteEmployee(path: string) {
        console.log('test-delete');
    }

    public editEmployee(form: any) {
        console.log('test-edit');
    }

    public createEmployee(uri: string){
        console.log('create-test')
    }
}
