import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackofficeRoutingModule } from './backoffice-routing.module';
import { MainlayoutComponent } from './mainlayout/mainlayout.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { SidebareComponent } from './sidebare/sidebare.component';
import { DepartmentComponent } from './department/department.component';
import { EquipeComponent } from './equipe/equipe.component';

@NgModule({
  declarations: [
    MainlayoutComponent,
    EtudiantComponent,
    SidebareComponent,
    DepartmentComponent,
    EquipeComponent,
  ],
  imports: [CommonModule, BackofficeRoutingModule],
})
export class BackofficeModule {}
