import { Component, OnInit } from '@angular/core';
import { Departement } from 'src/app/models/departement.model';
import { DepartementService } from 'src/app/services/departement.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css'],
})
export class DepartmentComponent implements OnInit {
  departements: Departement[] = [];

  constructor(private departementService: DepartementService) {}

  ngOnInit(): void {
    this.loadDepartements();
  }

  loadDepartements() {
    this.departementService.getAllDepartements().subscribe((data) => {
      this.departements = data;
    });
  }

  editDepartement(departement: any) {
    // Logique pour modifier un département
    console.log('Modifier département', departement);
  }

  deleteDepartement(id: number) {
    this.departementService.deleteDepartement(id).subscribe(() => {
      this.loadDepartements(); // Recharge la liste après suppression
    });
  }
}
