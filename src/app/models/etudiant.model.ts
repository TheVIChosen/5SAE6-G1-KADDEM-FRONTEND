import { Contrat } from "./contrat.model";
import { Departement } from "./departement.model";
import { Equipe } from "./equipe.model";
import { Option } from "./option.model";

export class Etudiant {
    idEtudiant?: number;
    nomE?: string;
    prenomE?: string;
    op?: Option;
    contrats?: Contrat[];
    departement?: Departement;
    equipes?: Equipe[];
  
    constructor() {
      this.contrats = [];
      this.equipes = [];
    }
  }