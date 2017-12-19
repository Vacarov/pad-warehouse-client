import {Component, Input} from '@angular/core';
import {DataService} from '../../data.service';
import {FormGroup, FormBuilder, AbstractControl, Validators, Form} from '@angular/forms';

@Component({
    selector: 'app-employee',
    templateUrl: './employee.component.html',
    styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent {

    employees: any;
    pageResult: any;

    formEditEmpl: FormGroup;

    @Input() pageIndex = 0;
    @Input() pageSize = 2;

    constructor(private dataService: DataService, private formBuilder: FormBuilder) {
        this.getEmployees(this.pageIndex, this.pageSize);
        this.formEditEmpl = formBuilder.group({
            name: ['']
        });
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

    public editEmployee() {

    }

    public createEmployee(uri: string){
        console.log('create-test')
    }
}
