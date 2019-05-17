import { Component, OnInit } from '@angular/core';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-hero-list-enter-leave-page',
  templateUrl: './hero-list-enter-leave-page.component.html'
})
export class HeroListEnterLeavePageComponent {
  heroes = HEROES.slice();

  onRemove(id: number) {
    this.heroes = this.heroes.filter(hero => hero.id !== id);
  }
}
