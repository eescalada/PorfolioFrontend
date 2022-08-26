import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module.ts/app-routing.module.ts.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { NavComponent } from './componentes/nav/nav.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { ProyectosPreviosComponent } from './componentes/proyectos-previos/proyectos-previos.component';
import { HttpClientModule } from '@angular/common/http';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { ExperienciaLaboralComponent } from './componentes/experiencia-laboral/experiencia-laboral.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { FooterComponent } from './componentes/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EncabezadoComponent,
    NavComponent,
    EducacionComponent,
    HabilidadesComponent,
    ProyectosPreviosComponent,
    AcercaDeComponent,
    ExperienciaLaboralComponent,
    HomeComponent,
    LoginComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
