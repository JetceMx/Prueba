import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InicioComponent } from './inicio/inicio.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { RecomendacionesComponent } from './recomendaciones/recomendaciones.component';
import { AgendarComponent } from './citas/agendar/agendar.component';
import { RevisarComponent } from './citas/revisar/revisar.component';
import { CitasComponent } from './citas/citas.component';
import { FooterComponent } from './footer/footer.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { RecoComponent } from './reco/reco.component';
import { AlertifyService } from './alertify.service';
import { VideoSeguroPipe } from './inicio/video-seguro.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatChipsModule} from '@angular/material/chips';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatMenuModule} from '@angular/material/menu';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InicioComponent,
    ContactanosComponent,
    AcercaDeComponent,
    RecomendacionesComponent,
    AgendarComponent,
    RevisarComponent,
    CitasComponent,
    FooterComponent,
    RecoComponent,
    VideoSeguroPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatChipsModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    MatProgressBarModule,
    MatButtonModule,
    MatGridListModule,
    MatMenuModule
  ],
  providers: [DatePipe, AlertifyService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
