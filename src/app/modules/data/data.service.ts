import {Injectable} from '@angular/core';
import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs/Rx';
import {ApiService} from 'app/core/services/api.service';
import {Departement} from './components/model/department.model';

@Injectable()
export class DataService {

    /**
     * @param {ApiService} api
     */
    constructor(private api: ApiService) {
    }

    public getDepartments(page: number, count: number): Observable<any>  {

        return Observable.create(observer => {
            this.api.get(`departments?page${page}&size=${count}`).subscribe(result => {
                observer.next(result);
            }, err => observer.error(err));
        });
    }

    /**
     * @param {number} id
     *
     * @returns {Observable<any>}
     */
    public getDepartmentsById(id: number): Observable<any> {

        return Observable.create(observer => {

            this.api.get('departments/' + id).subscribe(result => {
                observer.next(result);
            }, err => observer.error(err));
        });
    }

    public createDepartment(department: Departement): Observable<any>  {

        return Observable.create(observer => {
            this.api.post('departments/', department).subscribe(result => {
                observer.next(result);
            }, err => observer.error(err));
        });
    }

    /**
     * @param {number} id
     *
     * @returns {Observable<any>}
     */
    public updateDepartmentById(id: number, department: Departement): Observable<any> {

        return Observable.create(observer => {

            this.api.put('departments/' + id, department).subscribe(result => {
                observer.next(result);
            }, err => observer.error(err));
        });
    }

    /**
     * @param {string} uri
     *
     * @returns {Observable<any>}
     */
    public deleteDepartment(uri): Observable<any> {
        console.log(uri);
        return Observable.create(observer => {
            this.api.delete(uri).subscribe(result => {
                observer.next(result);
            }, err => observer.error(err));
        });
    }

    public getEmployees(page: number, count: number): Observable<any>  {

        return Observable.create(observer => {
            this.api.get(`employees?page${page}&size=${count}`).subscribe(result => {
                observer.next(result);
            }, err => observer.error(err));
        });
    }
}
