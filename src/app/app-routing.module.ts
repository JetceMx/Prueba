import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { RecomendacionesComponent } from './recomendaciones/recomendaciones.component';
import { AgendarComponent } from './citas/agendar/agendar.component';
import { RevisarComponent } from './citas/revisar/revisar.component';
import { CitasComponent } from './citas/citas.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'contactanos', component: ContactanosComponent },
  { path: 'acercaDe', component: AcercaDeComponent },
  { path: 'recomendaciones', component: RecomendacionesComponent },
  { path: 'citas', component: CitasComponent },
  { path: 'citas/agendar', component: AgendarComponent },
  { path: 'citas/revisar', component: RevisarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
