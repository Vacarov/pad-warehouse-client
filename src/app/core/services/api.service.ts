import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Rx';
import {KeyTransformer} from '../../shared/helper/key.transformer';

@Injectable()
export class ApiService {

  /**
   * @type {string}
   */
  private apiEndpoint = 'http://localhost:8080/api';

  /**
   * @param {Http} http
   * @param {Router} router
   */
  constructor(private http: Http, private router: Router) {
  }

  /**
   * @param {string} path
   *
   * @returns {Observable<any>}
   */
  public get (path: string): Observable<any> {

    const endpoint = `${this.apiEndpoint}/${path}`;
    return this.http
      .get(`${endpoint}`)
      .map(res => this.extractData(res))
      .catch(this.handleError.bind(this));
  }

  /**
   * @param {string} path
   * @param body
   *
   * @returns {Observable<any>}
   */
  public post(path: string, body: any): Observable<any> {

    const endpoint = `${this.apiEndpoint}/${path}`;
    body = KeyTransformer.transformToSnakeCase(body);

    return this.http
      .post(`${endpoint}`, body)
      .map(res => this.extractData(res))
      .catch(this.handleError.bind(this));
  }

  /**
   * @param {string} path
   * @param body
   *
   * @returns {Observable<any>}
   */
  public put(path: string, body: any): Observable<any> {

    const endpoint = `${this.apiEndpoint}/${path}`;
    body = KeyTransformer.transformToSnakeCase(body);

    return this.http
      .put(`${endpoint}`, body)
      .map(res => this.extractData(res))
      .catch(this.handleError.bind(this));
  }

  /**
   * @param {string} path
   * @param body
   *
   * @returns {Observable<any>}
   */
  public patch(path: string, body: any): Observable<any> {

    const endpoint = `${this.apiEndpoint}/${path}`;
    body = KeyTransformer.transformToSnakeCase(body);

    return this.http
      .patch(`${endpoint}`, body)
      .map(res => this.extractData(res))
      .catch(this.handleError.bind(this));
  }

  /**
   * @param {string} path
   *
   * @returns {Observable<any>}
   */
  public delete(path: string): Observable<any> {
console.log(path);
    const endpoint = `${path}`;

    return this.http
      .delete(`${endpoint}`)
      .map(res => this.extractData(res))
      .catch(this.handleError.bind(this));
  }

  /**
   * @param {Response} res
   * @param {boolean} toJSON
   *
   * @returns {any}
   */
  private extractData(res: Response, toJSON: boolean = true) {
    if (!toJSON) {
      return res;
    }

    return res.json() || {};
  }

  /**
   * @param {Response} error
   *
   * @returns {ErrorObservable}
   */
  private handleError(error: Response) {
    const err = error.json();

    if (error.status === 401) {

      localStorage.clear();
      this.router.navigateByUrl('/login');

      return Observable.throw({
        error: 'Credentials are incorrect'
      });

    } else if (error.status === 400) {

      return Observable.throw({
        error: err
      });
    }

    return Observable.throw(err);
  }
}
