import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../models/student';

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

  put(url: string, data: Student): Observable<any>{
    let path = `${this.apiUrl}${url}`;
    return this.httpClient.put(path, data);
  }
}
