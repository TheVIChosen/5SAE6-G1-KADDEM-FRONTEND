import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'backoffice', pathMatch: 'full' }, // Assurez-vous que 'auth' soit un chemin valide
  {
    path: 'backoffice',
    loadChildren: () =>
      import('./modules/backoffice/backoffice.module').then(
        (m) => m.BackofficeModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
