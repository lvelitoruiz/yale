import { Injectable } from '@angular/core';
import axios from 'axios';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private apiUrl = environment.apiUrl+'headers';

  constructor() {}

  getMenu(): Observable<any[]> {
    return new Observable(observer => {
      axios.get(this.apiUrl)
        .then(response => {
          const menuData = response.data.data[0].attributes.links;
          observer.next(menuData);
          observer.complete();
        })
        .catch(error => {
          observer.error(error);
        });
    });
  }
}
