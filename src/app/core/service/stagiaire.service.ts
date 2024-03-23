import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class StagiaireService {

 private baseUrl= `${environment.apiUrl}/stagiaire`
 

  
 
  constructor(private http:HttpClient){}

  postStagiaire(stagiaire:any):Observable<any>{
    return this.http.post(this.baseUrl , stagiaire);
  }
 
  getAllStagiaire():Observable<any>{
    return this.http.get(this.baseUrl+ 's')
  }
  getStagiaireById(id: number):Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`  );
  }
  updateStagiaire(id: number,stagiaire:any):Observable<any>{
    return this.http.put(`${this.baseUrl}/${id}` , stagiaire);
  }
  deleteStagiaire(id: number):Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}` );
  }


}
