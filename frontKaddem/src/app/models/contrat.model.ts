import { Etudiant } from "./etudiant.model";
import { Specialite } from "./specialite.model";

export class Contrat {
    idContrat?: number;
    dateDebutContrat?: Date;
    dateFinContrat?: Date;
    specialite?: Specialite;
    archive?: boolean;
    montantContrat?: number;
    etudiant?: Etudiant;
  }