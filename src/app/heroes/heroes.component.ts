import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../messages.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})


export class HeroesComponent implements OnInit {


  selectedHero: Hero | undefined; // SELECCIONADO DE LA INTERFAZ HERO

  heroes: Hero[] | undefined; 

  constructor(private heroService: HeroService, private messageService: MessageService) {}//La inyección de dependencias es una técnica en la que una clase recibe las dependencias que necesita desde el exterior, en lugar de crearlas internamente.

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);//Permiten que las aplicaciones reactiven los cambios en los datos y respondan a ellos de manera eficiente.
  }

  ngOnInit() {
    this.getHeroes();  // PARA UTILIZAR EL INICIALIZADOR PARA TRAER LOS HEROES
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;  // SE UTILIZA MEDIANTE LA SELECCION QUE ENVIE LA SOLICITUD DE CONSULTA DEL HEROES
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }
}
