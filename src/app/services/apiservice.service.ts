import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  apiUrl = 'https://localhost:44354/api/';
  constructor(private httpClient: HttpClient) { }

  get(url: string): Observable<any>{
    let path = `${this.apiUrl}${url}`;
    return this.httpClient.get<any>(path);
  }
}
