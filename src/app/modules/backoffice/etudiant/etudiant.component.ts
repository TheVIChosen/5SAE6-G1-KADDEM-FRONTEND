import { Component, OnInit } from '@angular/core';
import { EtudiantService } from 'src/app/services/etudiant.service';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css'],
})
export class EtudiantComponent implements OnInit {
  etudiants: any[] = [];

  constructor(private etudiantService: EtudiantService) {}

  ngOnInit(): void {
    this.loadEtudiants();
  }

  loadEtudiants() {
    this.etudiantService.getAllEtudiants().subscribe((data) => {
      this.etudiants = data;
    });
  }

  deleteEtudiant(id: number) {
    this.etudiantService.deleteEtudiant(id).subscribe(() => {
      this.loadEtudiants(); // Recharge la liste après suppression
    });
  }
}
