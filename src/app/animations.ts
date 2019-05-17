// Animations can be defined directly inside your components. Here we are
// defining the animations in a separate file, allowing us to re-use the animations.
// Defines a reusable animation named slideInAnimation.
// The animation definition does several things:
// Defines two transitions. A single trigger can define multiple states and transitions.
// Adjusts the styles of the host and child views to control their relative positions
// during the transition.
// Uses query() to determine which child view is entering and which is leaving the host view.
// A route change activates the animation trigger, and a transition matching the state
// change is applied.

import { animation, style, animate, trigger, transition, query,
animateChild, group } from '@angular/animations';

export const transAnimation = animation([
    style({
        height: '{{ height }}',
        opacity: '{{ opacity }}',
        backgroundColor: '{{ backgroundColor }}'
    }),
    animate('{{ time }}')
]);

// Routable animations
export const slideInAnimation =
  trigger('routeAnimations', [
    // During a transition, a new view is inserted directly after the old one and
    // both elements appear on screen at the same time. To prevent this, apply
    // additional styling to the host view, and to the removed and inserted child views.
    // The host view must use relative positioning, and the child view must use absolute
    // positioning.
    transition('HomePage <=> AboutPage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      // Use query() method to find and animate elements within the current host component.
      // query(":enter") statement returns the view that is being inserted, and
      // query(":leave") returns the view that is being removed.
      // Specifically, matches the view that is added and hides the newly added view by
      // positioning it to the far left.
      query(':enter', [
        style({ left: '-100%' })
      ]),
      // Calls animateChild() on the view that is leaving, to run its child animations.
      query(':leave', animateChild()),
      // Use group() function to make the inner animations run in parallel.
      group([
        // Queries the view that is removed and animates it to slide far to the right.
        // Slides in the new view by animating the view with an easing function and duration.
        // This animation results in the view sliding from the left to right.
        query(':leave', [
          animate('300ms ease-out', style({ left: '100%'}))
        ]),
        query(':enter', [
          animate('300ms ease-out', style({ left: '0%' }))
        ])
      ]),
      // Calls animateChild() method on the new view to run its child animations after
      // the main animation completes.
      query(':enter', animateChild()),
    ]),
    transition('* <=> FilterPage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '-100%'})
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('200ms ease-out', style({ left: '100%'}))
        ]),
        query(':enter', [
          animate('300ms ease-out', style({ left: '0%' }))
        ])
      ]),
      query(':enter', animateChild()),
    ])
  ])