import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlatoListComponent } from './components/plato-list/plato-list.component';
import { PlatoFormComponent } from './components/plato-form/plato-form.component';

const routes: Routes = [
  {
    path: '',
    component: PlatoListComponent
  },
  {
    path: 'plato',
    component: PlatoListComponent
  },
  {
    path: 'plato/create',
    component: PlatoFormComponent
  },
  {
    path: 'plato/edit/:id',
    component: PlatoFormComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
