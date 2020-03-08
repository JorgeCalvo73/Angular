import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import {MessageService} from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  /*Propiedad de componente que permite bindear HEROES */
  heroes: Hero[];

  /*Al pasar este parámetro en el constructor defino la propiedad privada heroService e indico que esa propiedad es el lugar para inyectar
    el servicio */
  constructor(private heroService: HeroService, private messageService: MessageService) { }

  //Aquí va la lógica de inicio de la clase.
  ngOnInit(): void {
    this.getHeroes();
  }

  /*Defino un método getHeroes y esperamos a que heroService.getHeroes devuelva el array con los héroes (async).
    El .subscribe pasa la respuesta (el array) */
  getHeroes(): void{
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

}
