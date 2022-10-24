import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EducacionComponent } from '../componentes/educacion/educacion.component';
import { EncabezadoComponent } from '../componentes/encabezado/encabezado.component';
import { HabilidadesComponent } from '../componentes/habilidades/habilidades.component';
import { HeaderComponent } from '../componentes/header/header.component';
import { NavComponent } from '../componentes/nav/nav.component';
import { ProyectosPreviosComponent } from '../componentes/proyectos-previos/proyectos-previos.component';
import { HomeComponent } from '../componentes/home/home.component';
import { LoginComponent } from '../componentes/login/login.component';
import { FooterComponent } from '../componentes/footer/footer.component';
import { NewExperienciaComponent } from '../componentes/experiencia-laboral/new-experiencia.component';
import { EditExperienciaComponent } from '../componentes/experiencia-laboral/edit-experiencia.component';
import { NeweducacionComponent } from '../componentes/educacion/neweducacion.component';
import { EditeducacionComponent } from '../componentes/educacion/editeducacion.component';
import { EditSkillComponent } from '../componentes/habilidades/edit-skill.component';
import { NewSkillComponent } from '../componentes/habilidades/new-skill.component';
/*import { EditencabezadoComponent } from '../componentes/encabezado/editencabezado.component';*/


const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'login', component:LoginComponent},
  {path: 'header', component:HeaderComponent},
  {path: 'encabezado', component:EncabezadoComponent},
  {path: 'nav', component:NavComponent},
  {path: 'educacion', component:EducacionComponent},
  {path: 'habilidades', component:HabilidadesComponent},
  {path: 'proyectos-previos', component:ProyectosPreviosComponent},
  {path: 'footer', component:FooterComponent},
  {path: 'nuevaexp', component: NewExperienciaComponent},
  {path: 'editexp/:id', component: EditExperienciaComponent},
  {path: 'nuevaedu', component: NeweducacionComponent},
  {path: 'editedu/:id', component: EditeducacionComponent},
  {path: 'newskill', component: NewSkillComponent},
  {path: 'editskill/:id', component: EditSkillComponent},
  /*{path: 'editencabezado/:id', component: EditencabezadoComponent}*/

];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule{ }
