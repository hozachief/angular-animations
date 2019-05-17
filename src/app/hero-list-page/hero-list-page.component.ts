import { Component, OnInit, HostBinding } from '@angular/core';
import { trigger, state, style, transition, animate, query, stagger } from '@angular/animations';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-hero-list-page',
  // The animation does the following:
  // Ignores any animations that are performed when the user first opens or navigates
  // to this page. The filter narrows what is already there, it assumes that any
  // HTML elements to be animated already exist in the Document Object Model (DOM).
  // Performs a filter match for matches.
  animations: [
    // Can define more than one animation trigger for a component.
    trigger('pageAnimations', [
      transition(':enter', [
        // Angular lets you animate coordinated sequences, like an entire grid or list of
        // elements as they enter and leave a page. Can run multiple animations in parallel,
        // or run discrete animations sequentially.
        // query() function controls complex animation sequences. query() finds one or more
        // inner HTML elements within the element that is being animated.
        // query() targets specific HTML elements within a parent component and applies
        // animations to each element individually. Angular handles setup, teardown, and
        // cleanup as it coordinates the elements across the page.
        // Specifically in this example, use query() to look for any element entering
        // or leaving the page. For each of these elements, use style() to set the same
        // initial style for the element. Make it invisible and use transform to
        // move it out of position so that it can slide into place.
        query('.hero, form', [
          style({opacity: 0, transform: 'translateY(-100px)'}),
          // stagger() function allows you to define a timing gap between each queried item
          // that is animated and animates elements with a delay between them. Delay each
          // animation by 30 milliseconds. Animate each element on screen for 0.5 seconds
          // using a custom-defined easing curve, simultaneously fading it in and un-transforming it.
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
      // For each match:
      // Hides the element by making it completely transparent and infinitely narrow, by
      // setting its opacity and width to 0.
      // Animates in the element over 300 milliseconds. During the animation, the element
      // assumes its default width and opacity.
      // If there are multiple matching elements, staggers in each element starting at
      // the top of the page, with a 50-millisecond delay between each element.
      transition(':increment', [
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
