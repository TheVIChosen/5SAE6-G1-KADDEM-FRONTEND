import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contrat } from '../models/contrat.model';

@Injectable({
  providedIn: 'root',
})
export class ContratService {
  private baseUrl = 'http://localhost:8090/contrat';

  constructor(private http: HttpClient) {}

  // Récupérer tous les contrats
  getAllContrats(): Observable<Contrat[]> {
    return this.http.get<Contrat[]>(`${this.baseUrl}/retrieve-all-contrats`);
  }

  // Récupérer un contrat par ID
  getContratById(id: number): Observable<Contrat> {
    return this.http.get<Contrat>(`${this.baseUrl}/retrieve-contrat/${id}`);
  }

  // Ajouter un contrat
  addContrat(contrat: Contrat): Observable<Contrat> {
    return this.http.post<Contrat>(`${this.baseUrl}/add-contrat`, contrat);
  }

  // Supprimer un contrat par ID
  deleteContrat(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/remove-contrat/${id}`);
  }

  // Mettre à jour un contrat
  updateContrat(contrat: Contrat): Observable<Contrat> {
    return this.http.put<Contrat>(`${this.baseUrl}/update-contrat`, contrat);
  }

  // Assigner un contrat à un étudiant
  assignContratToEtudiant(
    idContrat: number,
    nomE: string,
    prenomE: string
  ): Observable<Contrat> {
    return this.http.put<Contrat>(
      `${this.baseUrl}/assignContratToEtudiant/${idContrat}/${nomE}/${prenomE}`,
      {}
    );
  }

  // Récupérer le nombre de contrats valides entre deux dates
  getNbContratsValides(startDate: string, endDate: string): Observable<number> {
    return this.http.get<number>(
      `${this.baseUrl}/getnbContratsValides/${startDate}/${endDate}`
    );
  }

  // Mettre à jour le statut des contrats automatiquement
  majStatusContrat(): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/majStatusContrat`, {});
  }

  // Calculer le chiffre d'affaires entre deux dates
  calculChiffreAffaireEntreDeuxDates(
    startDate: string,
    endDate: string
  ): Observable<number> {
    return this.http.get<number>(
      `${this.baseUrl}/calculChiffreAffaireEntreDeuxDate/${startDate}/${endDate}`
    );
  }
}
