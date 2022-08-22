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


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EncabezadoComponent,
    NavComponent,
    EducacionComponent,
    HabilidadesComponent,
    ProyectosPreviosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
