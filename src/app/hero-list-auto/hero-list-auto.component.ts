import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-list-auto',
  templateUrl: './hero-list-auto.component.html',
  styleUrls: ['./hero-list-auto.component.css'],
  // Sometimes you don't know the value of a dimensional style property until runtime.
  // Widths and heights that depend on their content and the screen size.
  // Use special wildcard * property value under style(), the value of that particular
  // style property is computed at runtime and then plugged into the animation.
  animations: [
    trigger('shrinkOut', [
      // The animation takes whatever height the element has before it leaves, and
      // animates from that height to zero.
      state('in', style({ height: '*' })),
      transition('* => void', [
        style({ height: '*'}),
        animate(250, style({ height: 0 }))
      ])
    ])
  ]
})
export class HeroListAutoComponent {
  @Input() heroes: Hero[];

  @Output() remove = new EventEmitter<number>();

  removeHero(id: number) {
    this.remove.emit(id);
  }
}
