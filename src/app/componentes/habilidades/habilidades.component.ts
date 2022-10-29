import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/servicios/skill.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  skill: Skill[] = [];

  constructor(private skillS: SkillService, private tokenService: TokenService) { }

  isLogged = false;
  isAdmin = false;

  ngOnInit(): void {
    this.cargarSkills();

    this.isAdmin = false;
    this.isLogged = false;
    if(this.tokenService.getToken()){
      this.isLogged = true;

      if(this.tokenService.getAuthorities().includes('ROLE_ADMIN')){
        this.isAdmin = true
      }
    }
  }

  cargarSkills(): void{
    this.skillS.lista().subscribe(data => {this.skill = data;})
    }

    delete(id?: number){
      if(id != undefined){
        this.skillS.delete(id).subscribe(
          data => {
            this.cargarSkills();
          }, err => {
            alert("No se pudo borrar la skill");
          }
        )
      }
    }
  }


