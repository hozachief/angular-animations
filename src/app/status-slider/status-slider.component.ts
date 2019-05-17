import { Component, OnInit } from '@angular/core';
import { trigger, state, transition, style, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-status-slider',
  animations: [
    trigger('slideStatus', [
      state('inactive', style({ backgroundColor: 'blue' })),
      state('active', style({ backgroundColor: 'orange' })),
      transition('* => active', [
        // Angular's keyframe() function is similar to keyframes in CSS. Keyframes allow
        // several style changes within a single timing segment. For example instead of just
        // fading...could change color several times over a single 2-second timespan.
        // Keyframes include an offset that defines the point in the animation where each
        // style change occurs. Keyframes are optional.
        animate('2s', keyframes([
          style({ backgroundColor: 'blue', offset: 0 }),
          style({ backgroundColor: 'red', offset: 0.8 }),
          style({ backgroundColor: 'orange', offset: 1.0 })
        ])),
      ]),
      transition('* => inactive', [
        animate('2s', keyframes([
          style({ backgroundColor: 'orange', offset: 0 }),
          style({ backgroundColor: 'red', offset: 0.2 }),
          style({ backgroundColor: 'blue', offset: 1.0 })
        ]))
      ])
    ])
  ],
  templateUrl: './status-slider.component.html',
  styleUrls: ['./status-slider.component.css']
})
export class StatusSliderComponent {
  status: 'active' | 'inactive' = 'inactive';

  toggle() {
    if (this.status === 'active') {
      this.status = 'inactive';
    }
    else {
      this.status = 'active';
    }
  }
}
