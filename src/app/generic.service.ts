import { Injectable } from '@angular/core';
import axios from 'axios';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GenericService {
  

  constructor() {}

  getdata(routeGot: string): Observable<any[]> {
    const apiUrl = environment.apiUrl + routeGot;
    return new Observable((observer) => {
      axios
        .get(apiUrl)
        .then((response) => {
          const menuData = response.data.data;
          observer.next(menuData);
          observer.complete();
        })
        .catch((error) => {
          observer.error(error);
        });
    });
  }
}
