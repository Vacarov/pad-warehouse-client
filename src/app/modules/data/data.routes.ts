import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DepartmentComponent} from './components/departement/department.component';
import {EmployeeComponent} from './components/employee/employee.component';

const routes: Routes = [
    {
        path: 'departments',
        component: DepartmentComponent
    },
    {
        path: 'employees',
        component: EmployeeComponent
    },
    {
        path: 'departments/:id',
        component: DepartmentComponent
    }
];

export const Routing: ModuleWithProviders = RouterModule.forChild(routes);
