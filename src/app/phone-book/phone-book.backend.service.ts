import {HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Configuration} from './phone-book.service.config';

@Injectable()
export class PhoneBookBackendService {

  private actionUrl: string;

  constructor(private http: HttpClient, private configuration: Configuration) {
    this.actionUrl = configuration.serverWithApiUrl;
  }

  public getAll<T>(): Observable<T> {
    return this.http.get<T>(this.actionUrl.concat('findAll'));
  }

  public getSingle<T>(id: string): Observable<T> {
    return this.http.get<T>(this.actionUrl.concat('findById?id=').concat(id));
  }

  public save<T>(payload: any): Observable<T> {
    return this.http.post<T>(this.actionUrl.concat('save'), payload);
  }

  public update<T>(id: string, itemToUpdate: any): Observable<T> {
    return this.http.put<T>(this.actionUrl.concat('update') + id, itemToUpdate);
  }
}
