import { Component, HostBinding } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // Make the animation definition available in your application by
  // adding the reusable animation (slideInAnimation) to the animations
  // metadata of the AppComponent.
  animations: [
    slideInAnimation
  ]
})
export class AppComponent {
  // To disable all animations for an Angular app.
  // Disabling animations application-wide is useful during end-to-end (E2E) testing.
  @HostBinding('@.disabled')
  public animationsDisabled = false;

  // AppComponent defines a method that can detect when a view changes. The method
  // assigns an animation state value to the animation trigger (@routeAnimation) based
  // on the route configuration data property value.
  // prepareRoute() method takes the value of the output directive (established
  // through #outlet="outlet (check html file)") and returns a string value
  // representing the state of the animation based on the custom data of the
  // current active route.
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  toggleAnimations() {
    this.animationsDisabled = !this.animationsDisabled;
  }
}
