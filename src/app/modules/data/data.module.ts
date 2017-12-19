import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule, MatButtonModule, MatListModule} from '@angular/material';
import {Routing} from 'app/modules/data/data.routes';
import {DepartmentComponent} from './components/departement/department.component';
import {EmployeeComponent} from './components/employee/employee.component';
import {DataService} from './data.service';
import {MatPaginatorModule} from '@angular/material';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        Routing,
        MatCardModule,
        MatButtonModule,
        MatListModule,
        MatPaginatorModule,
        NgbModule.forRoot(),
        FormsModule,
        ReactiveFormsModule
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
