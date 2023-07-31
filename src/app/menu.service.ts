import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MenuItem } from './menu-tree/menu';
@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private apiUrl = "http://49.249.110.2:8050/api/MenuMasters/GetMenuMasterList/173";

  constructor(private http: HttpClient) { }

  getMenuData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
