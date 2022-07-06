import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from '../Models/person-models';

const baseUrl="https://localhost:44302/api/person";

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: HttpClient) 
  { }
  
  getAll(): Observable<any> {
    return this.http.post<any>(`${baseUrl}/getAll`,{pageIndex:0,pageSize:20});
  }

  get(id: any): Observable<any> {
    return this.http.get(`${baseUrl}/get/?id=${id}`);
    //return this.http.get(`https://localhost:44302/api/person/get?id=1`);
  }

  create(data: any): Observable<any> {
    return this.http.post(`${baseUrl}/create`, data);
  }

  update( data: any): Observable<any> {
    return this.http.put(`${baseUrl}/edit`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/delete?Id=${id}`);
  }

}
