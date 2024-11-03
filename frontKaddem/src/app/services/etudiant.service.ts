import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Etudiant } from '../models/etudiant.model';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root',
})
export class EtudiantService {
  baseUrl = environment.apiUrl+'/kaddem/etudiant';

  constructor(private http: HttpClient) {}

  // Récupérer tous les étudiants
  getAllEtudiants(): Observable<Etudiant[]> {
    return this.http.get<Etudiant[]>(`${this.baseUrl}/retrieve-all-etudiants`);
  }

  // Récupérer un étudiant par ID
  getEtudiantById(id: number): Observable<Etudiant> {
    return this.http.get<Etudiant>(`${this.baseUrl}/retrieve-etudiant/${id}`);
  }

  // Ajouter un étudiant
  addEtudiant(etudiant: Etudiant): Observable<Etudiant> {
    return this.http.post<Etudiant>(`${this.baseUrl}/add-etudiant`, etudiant);
  }

  // Supprimer un étudiant par ID
  deleteEtudiant(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/remove-etudiant/${id}`);
  }

  // Mettre à jour un étudiant
  updateEtudiant(etudiant: Etudiant): Observable<Etudiant> {
    return this.http.put<Etudiant>(`${this.baseUrl}/update-etudiant`, etudiant);
  }

  // Affecter un étudiant à un département
  assignEtudiantToDepartement(
    etudiantId: number,
    departementId: number
  ): Observable<void> {
    return this.http.put<void>(
      `${this.baseUrl}/affecter-etudiant-departement/${etudiantId}/${departementId}`,
      {}
    );
  }

  // Ajouter un étudiant avec affectation à un contrat et une équipe
  addEtudiantWithEquipeAndContract(
    etudiant: Etudiant,
    idContrat: number,
    idEquipe: number
  ): Observable<Etudiant> {
    return this.http.post<Etudiant>(
      `${this.baseUrl}/add-assign-Etudiant/${idContrat}/${idEquipe}`,
      etudiant
    );
  }

  // Récupérer les étudiants d'un département spécifique
  getEtudiantsByDepartement(idDepartement: number): Observable<Etudiant[]> {
    return this.http.get<Etudiant[]>(
      `${this.baseUrl}/getEtudiantsByDepartement/${idDepartement}`
    );
  }
}
