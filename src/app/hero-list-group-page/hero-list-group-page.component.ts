import { Component, OnInit } from '@angular/core';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-hero-list-group-page',
  templateUrl: './hero-list-group-page.component.html',
  styleUrls: ['./hero-list-group-page.component.css']
})
export class HeroListGroupPageComponent {
  heroes = HEROES.slice();

  onRemove(id: number) {
    this.heroes = this.heroes.filter(hero => hero.id !== id);
  }
}
