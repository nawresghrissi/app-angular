import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl= `${environment.apiUrl}/sign-up`

  constructor(private http:HttpClient) { }
  
  registrStagiaire(signRequestDTO:any):Observable<any>{
    return this.http.post(this.baseUrl + "stagiaire/sign-up", signRequestDTO);
  }
  registrEncadrant(signRequestDTO:any):Observable<any>{
    return this.http.post(this.baseUrl + "encadrant/sign-up", signRequestDTO);
  }
}
