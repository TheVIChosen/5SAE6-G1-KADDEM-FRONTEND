import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainlayoutComponent } from './mainlayout/mainlayout.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { DepartmentComponent } from './department/department.component';

const routes: Routes = [
  {
    path: '',
    component: MainlayoutComponent,
    children: [
      { path: 'etudiant', component: EtudiantComponent },
      { path: 'departement', component: DepartmentComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }, // Redirige vers dashboard par défaut
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BackofficeRoutingModule {}
