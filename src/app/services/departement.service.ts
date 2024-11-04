import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { Departement } from '../models/departement.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DepartementService {
  private apiUrl = `${environment.apiUrl}/kaddem/departement`;

  constructor(private http: HttpClient) {}

  // Récupérer tous les départements
  getAllDepartements(): Observable<Departement[]> {
    return this.http.get<Departement[]>(
      `${this.apiUrl}/retrieve-all-departements`
    );
  }

  // Récupérer un département par son ID
  getDepartementById(departementId: number): Observable<Departement> {
    return this.http.get<Departement>(
      `${this.apiUrl}/retrieve-departement/${departementId}`
    );
  }

  // Ajouter un nouveau département
  addDepartement(departement: Departement): Observable<Departement> {
    return this.http.post<Departement>(
      `${this.apiUrl}/add-departement`,
      departement
    );
  }

  // Mettre à jour un département
  updateDepartement(departement: Departement): Observable<Departement> {
    return this.http.put<Departement>(
      `${this.apiUrl}/update-departement`,
      departement
    );
  }

  // Supprimer un département par son ID
  deleteDepartement(departementId: number): Observable<void> {
    return this.http.delete<void>(
      `${this.apiUrl}/remove-departement/${departementId}`
    );
  }
}
