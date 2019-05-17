import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, transition, group, animate } from '@angular/animations';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-list-groups',
  templateUrl: './hero-list-groups.component.html',
  styleUrls: ['./hero-list-groups.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({
        width: 120,
        transform: 'translateX(0)', opacity: 1
      })),

      transition('void => *', [
        style({ width: 10, transform: 'translateX(50px)', opacity: 0 }),
        // group() function is used to group animation steps, rather than animated elements.
        group([
          animate('0.3s 0.1s ease', style({
            transform: 'translateX(0)',
            width: 120
          })),
          // Leaving this as a reminder...Mistake/Duplicate...
          /*animate('0.3s ease', style({
            transform: 'translateX(0)',
            width: 120
          })),*/
          animate('0.3s ease', style({
            opacity: 1
          }))
        ])
      ]),

      transition('* => void', [
        group([
          animate('0.3s ease', style({
            transform: 'translateX(50px)',
            width: 10
          })),
          animate('0.3s 0.2s ease', style({
            opacity: 0
          }))
        ])
      ])
    ])
  ]
})
export class HeroListGroupsComponent {
  @Input() heroes: Hero[];

  @Output() remove = new EventEmitter<number>();

  removeHero(id: number) {
    this.remove.emit(id);
  }
}
