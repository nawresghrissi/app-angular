import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, of, tap } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class StagiaireService {
  private apiStagiaire = environment.apiUrl;
  constructor(private http: HttpClient, private router: Router) {}
  sendData(value: any): Observable<any> {
    const url = `${this.apiStagiaire}/stagiaire`;
    return this.http.post(url, value).pipe(
      tap((response) => {
        console.log('Réponse du serveur:', response);
      }),
      catchError((error) => {
        console.error('Erreur lors de l\'envoi des données:', error);

        return of(null);
      })
    );
  }

  getDataByEmail(email: any) {
    const url = `${this.apiStagiaire}/stagiaireEmail/${email}`;
    return this.http.get<any>(url);
  }
}
