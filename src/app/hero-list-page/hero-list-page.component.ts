import { Component, OnInit, HostBinding } from '@angular/core';
import { trigger, state, style, transition, animate, query, stagger } from '@angular/animations';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-hero-list-page',
  animations: [
    trigger('pageAnimations', [
      transition(':enter', [
        query('.hero, form', [
          style({opacity: 0, transform: 'translateY(-100px)'}),
          stagger(-30, [
            animate('500ms cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 1, transform: 'none' }))
          ])
        ])
      ])
    ]),
    trigger('filterAnimation', [
      // :enter and :leave are aliases for the void => * and * => void transitions
      // It's harder to target an element that is entering a view because it is not
      // in the Document Object Model (DOM) yet. Use aliases :enter and :leave to target
      // HTML elements that are inserted or removed from a view.
      transition(':enter, * => 0, * => -1', []),
      // Selector values :increment and :decrement used to kick off a transition
      // when a numeric value has increased or decreased in value.
      transition(':increment', [
        //...
        query(':enter', [
          style({ opacity: 0, width: '0px' }),
          stagger(50, [
            animate('300ms ease-out', style({ opacity: 1, width: '*' })),
          ]),
        ], { optional: true })
      ]),
      transition(':decrement', [
        query(':leave', [
          //...
          stagger(50, [
            animate('300ms ease-out', style({ opacity: 0, width: '0px' })),
          ]),
        ])
      ]),
    ]),
  ],
  templateUrl: './hero-list-page.component.html',
  styleUrls: ['./hero-list-page.component.css']
})
export class HeroListPageComponent implements OnInit {
  @HostBinding('@pageAnimations')
  public animatePage = true;

  _heroes = [];
  heroTotal = -1;
  get heroes() {
    return this._heroes;
  }

  ngOnInit() {
    this._heroes = HEROES;
  }

  updateCriteria(criteria: string) {
    criteria = criteria ? criteria.trim() : '';

    this._heroes = HEROES.filter(hero => hero.name.toLowerCase().includes(criteria.toLowerCase()));
    const newTotal = this.heroes.length;

    if (this.heroTotal !== newTotal) {
      this.heroTotal = newTotal;
    }
    else if (!criteria) {
      this.heroTotal = -1;
    }
  }

}
