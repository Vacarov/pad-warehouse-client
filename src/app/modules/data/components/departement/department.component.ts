import {Component, Input} from '@angular/core';
import {DataService} from '../../data.service';

@Component({
    selector: 'app-department',
    templateUrl: './departement.component.html',
    styleUrls: ['./department.component.scss']
})
export class DepartmentComponent {

    departments: any;
    pageResult: any;

    @Input() pageIndex = 0;
    @Input() pageSize = 20;
    private id: number;

    /**
     * @param {DataService} dataService
     */
    constructor(private dataService: DataService) {
        this.getDepartements(this.pageIndex, this.pageSize);
    }

    /**
     * @param {number} page
     * @param {number} count
     */
    public getDepartements(page: number, count: number) {
        this.dataService.getDepartments(page, count).subscribe(
            result => {
                this.departments = result._embedded.departmentResourceList;
                this.pageResult = result.pageResult;
            }
        );
    }

    public deleteDepartment(dep: any) {
        this.dataService.deleteDepartment(dep._links.self.href).subscribe(result => {
                const index = this.departments.indexOf(dep);
                if (index > -1) {
                    this.departments.splice(index, 1);
                }
                console.log('dep deleted successfully')
            },
            error => {
                console.log('Error!')
            }
        );
    }

    public editDepartment(dep: any) {
        this.dataService.deleteDepartment(dep._links.self.href).subscribe(result => {
                const index = this.departments.indexOf(dep);
                if (index > -1) {
                    this.departments.splice(index, 1);
                }
            },
            error => {
                console.log('Error!')
            }
        );
    }

    public createDepartment(dep: any) {
        this.dataService.deleteDepartment(dep._links.self.href).subscribe(result => {
                const index = this.departments.indexOf(dep);
                if (index > -1) {
                    this.departments.splice(index, 1);
                }
            },
            error => {
                console.log('Error!')
            }
        );
    }
}
