import { DetailEquipe } from "./detailequipe.model";
import { Etudiant } from "./etudiant.model";
import { Niveau } from "./niveau.model";

export class Equipe {
    idEquipe?: number;
    nomEquipe?: string;
    niveau?: Niveau;
    etudiants?: Etudiant[];
    detailEquipe?: DetailEquipe;
  
    constructor() {
      this.etudiants = [];
    }
  }
  