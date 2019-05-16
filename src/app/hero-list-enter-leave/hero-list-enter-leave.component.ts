import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-hero-list-enter-leave',
  animations: [
    trigger('flyInOut', [
      // state('uniqueName', style())
      state('in', style({ transform: 'translateX(0)' })),
      // transition(expression, animate())
      // A transition of void => * applies when the element enters a view, regardless
      // of what state it assumes when entering.
      transition('void => *', [
        style({ transform: 'translateX(-100%)' }),
        animate(100)
      ]),
      // A transition of * => void applies when the element leaves a view, regardless
      // of what state it was in before it left.
      transition('* => void', [
        animate(100, style({ transform: 'translateX(100%)' }))
      ])
    ])
  ],
  templateUrl: './hero-list-enter-leave.component.html',
  styleUrls: ['./hero-list-enter-leave.component.css']
})
export class HeroListEnterLeaveComponent {
  @Input() heroes: Hero[];

  @Output() remove = new EventEmitter<number>();

  removeHero(id: number) {
    this.remove.emit(id);
  }

  heroesSlice = HEROES.slice();

  onRemove(id: number) {
    this.heroesSlice = this.heroesSlice.filter(hero => hero.id !== id);
  }
}
