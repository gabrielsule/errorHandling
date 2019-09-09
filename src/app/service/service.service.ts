import {
  Injectable
} from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';
import {
  Observable,
  throwError
} from 'rxjs';
import {
  Globals
} from './../help/Globals';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient, private global: Globals) {}

  getData(): Observable < any > {
    return this.http.get(this.global.baseUrl);
  }

  extractData() {
    this.getData().subscribe(res => {
      console.log(res);
    });
  }
}
