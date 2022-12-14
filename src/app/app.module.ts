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
import { FormsModule } from '@angular/forms';
import { interceptorProvider } from './servicios/interceptor-service';
import { NewExperienciaComponent } from './componentes/experiencia-laboral/new-experiencia.component';
import { EditExperienciaComponent } from './componentes/experiencia-laboral/edit-experiencia.component';
import { NeweducacionComponent } from './componentes/educacion/neweducacion.component';
import { EditeducacionComponent } from './componentes/educacion/editeducacion.component';
import { EditSkillComponent } from './componentes/habilidades/edit-skill.component';
import { NewSkillComponent } from './componentes/habilidades/new-skill.component';
/*import { EditencabezadoComponent } from './componentes/encabezado/editencabezado.component';*/

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
    FooterComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    NeweducacionComponent,
    EditeducacionComponent,
    EditSkillComponent,
    NewSkillComponent,
    /*EditencabezadoComponent*/
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    FormsModule
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
