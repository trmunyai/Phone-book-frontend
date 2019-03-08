import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Configuration} from './phone-book.service.config';

@Injectable()
export class PhoneBookBackendService {

  private actionUrl: string;

  constructor(private http: HttpClient, private configuration: Configuration) {
    this.actionUrl = configuration.serverWithApiUrl;
  }

  public getAll(): Observable<any> {
    return this.http.get(this.actionUrl.concat('findAll'));
  }

  public getSingle(id: string): Observable<any> {
    return this.http.get(this.actionUrl.concat('findById?id=').concat(id));
  }

  public save(payload: any): Observable<any> {
    return this.http.post(this.actionUrl.concat('save'), payload);
  }

  public update(id: string, itemToUpdate: any): Observable<any> {
    return this.http.put(this.actionUrl.concat('update') + id, itemToUpdate);
  }
}
