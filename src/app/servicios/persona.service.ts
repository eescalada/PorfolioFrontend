import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  URL = 'https://backendelisolesc.herokuapp.com/personas/';


  constructor(private http: HttpClient) { }

  public getPersona(): Observable<persona>{
    return this.http.get<persona>(this.URL+ 'traer/perfil');
  }
}



  /*public lista(): Observable<persona[]>{
    return this.HttpClient.get<persona[]>(this.URL + 'lista');
  }

  public detail(id:number): Observable<persona>{
    return this.HttpClient.get<persona>(this.URL + `detail/${id}`);
  }

  //public save(persona: Persona): Observable<any>{
    //return this.httpClient.post<any>(this.URL + 'create', persona);
  //}
  public update(id: number, persona: persona): Observable<any>{
    return this.HttpClient.put<any>(this.URL + `update/${id}`, persona);
  }

  public delete(id: number): Observable<any>{
    return this.HttpClient.delete<any>(this.URL + `delete/${id}`);
  }*/



