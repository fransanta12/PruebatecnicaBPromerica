import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { EjercicioUnoComponent } from './component/ejercicio-uno/ejercicio-uno.component';
import { EjercicioDosComponent } from './component/ejercicio-dos/ejercicio-dos.component';

const routes: Routes = [
  {path:'',component: EjercicioUnoComponent},
  {path:'ejercioA', component: EjercicioUnoComponent},
  {path:'ejercioB', component: EjercicioDosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
