import { Component, OnInit } from '@angular/core';
import { state, trigger, style, transition, animate, AnimationEvent } from '@angular/animations';

@Component({
  selector: 'app-open-close',
  // animations property
  animations: [
    // An animation requires a trigger, so that it knows when to start.
    // trigger() function collects the states and transitions, and gives the animation
    // a name, so you can attach it to the triggering element in the HTML template.
    trigger('openClose', [
      // state() function to define different states to call at the end of each transition.
      // Takes two arguments: a unique name like 'open' or 'closed and a style() function.
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.5,
        backgroundColor: 'green'
      })),
      // Animation transition to specify the changes that occur between one state and another
      // over a period of time.
      // transition() function accepts two arguments: the first argument accepts an expression
      // that defines the direction between two transition states, and the second argument accepts
      // an animate() function.
      // Animation metadata: duration, delay, easing. animate() function accepts the timings
      // and styles input parameters.
      // animate('duration delay easing')
      // => operator indicates unidirectional transitions, and <=> is bidirectional.
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ],
  templateUrl: './open-close.component.html',
  styleUrls: ['./open-close.component.css']
})
export class OpenCloseComponent {
  isOpen = true;
  toggle() {
    this.isOpen = !this.isOpen;
  }

  // In the HTML template, the animation event is passed back via $event, as @trigger.start
  // and @trigger.done, where trigger is the name of the trigger being used.
  // (look at open-close.component.html file)
  // A use for animation callbacks could be to cover for a slow Application Programming Interface (API)
  // call, like a database lookup...could set up the InProgress button to have its own looping animation...
  // Another animation can be called when the current animation finishes...button goes from the inProgress
  // state to the closed state when the API call is completed.
  // Callbacks can serve as a debugging tool, for example in conjunction with console.warn()
  // to view the application's progress in a browser's Developer JavaScript Console.
  onAnimationEvent ( event: AnimationEvent ) {
    // openClose is trigger name.
    console.warn(`Animation Trigger: ${event.triggerName}`);

    // phaseName is start or done.
    console.warn(`Phase: ${event.phaseName}`);

    // totalTime is 1000 or 1 second
    console.warn(`Total time: ${event.totalTime}`);

    // fromState is either open or closed
    console.warn(`From: ${event.fromState}`);

    // toState either open or closed
    console.warn(`To: ${event.toState}`);

    // The HTML element itself, the button
    console.warn(`Element: ${event.element}`);
  }
}
