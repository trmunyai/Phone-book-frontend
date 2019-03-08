import {Injectable} from '@angular/core';

@Injectable()
export class Configuration {
  readonly SERVER = 'http://localhost:8080';
  readonly API_URL = '/Services/phoneBook/';
  readonly SERVER_WITH_API_URL = this.SERVER + this.API_URL;
}
