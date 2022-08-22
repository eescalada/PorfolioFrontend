import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EducacionComponent } from '../componentes/educacion/educacion.component';
import { EncabezadoComponent } from '../componentes/encabezado/encabezado.component';
import { HabilidadesComponent } from '../componentes/habilidades/habilidades.component';
import { HeaderComponent } from '../componentes/header/header.component';
import { NavComponent } from '../componentes/nav/nav.component';
import { ProyectosPreviosComponent } from '../componentes/proyectos-previos/proyectos-previos.component';


const routes: Routes = [
  {path: 'header', component:HeaderComponent},
  {path: 'encabezado', component:EncabezadoComponent},
  {path: 'nav', component:NavComponent},
  {path: 'educacion', component:EducacionComponent},
  {path: 'habilidades', component:HabilidadesComponent},
  {path: 'proyectos-previos', component:ProyectosPreviosComponent}
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
