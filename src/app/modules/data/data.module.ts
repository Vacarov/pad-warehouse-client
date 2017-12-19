import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MdCardModule, MdButtonModule} from '@angular/material';
import {Routing} from 'app/modules/data/data.routes';
import {DepartmentComponent} from './components/departement/department.component';
import {EmployeeComponent} from './components/employee/employee.component';
import {DataService} from './data.service';
import {MdPaginatorModule} from '@angular/material';
import {MdListModule} from '@angular/material';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [
        CommonModule,
        Routing,
        MdCardModule,
        MdButtonModule,
        MdListModule,
        MdPaginatorModule,
        NgbModule.forRoot()
    ],
    exports: [],
    declarations: [
        DepartmentComponent,
        EmployeeComponent
    ],
    providers: [
        DataService
    ]
})
export class DataModule {
}
