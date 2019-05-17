import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { OpenCloseComponent } from './open-close/open-close.component';
import { HeroListPageComponent } from './hero-list-page/hero-list-page.component';
import { StatusSliderComponent } from './status-slider/status-slider.component';
import { HeroListEnterLeavePageComponent } from './hero-list-enter-leave-page/hero-list-enter-leave-page.component';
// Pay close attention. HeroListEnterLeaveComponent is in declarations only, not in imports.
import { HeroListEnterLeaveComponent } from './hero-list-enter-leave/hero-list-enter-leave.component';
import { HeroListAutoComponent } from './hero-list-auto/hero-list-auto.component';
import { HeroListAutoPageComponent } from './hero-list-auto-page/hero-list-auto-page.component';
import { HeroListGroupsComponent } from './hero-list-groups/hero-list-groups.component';
import { HeroListGroupPageComponent } from './hero-list-group-page/hero-list-group-page.component';

@NgModule({
  declarations: [
    AppComponent,
    OpenCloseComponent,
    HeroListPageComponent,
    StatusSliderComponent,
    HeroListEnterLeavePageComponent,
    HeroListEnterLeaveComponent,
    HeroListAutoComponent,
    HeroListAutoPageComponent,
    HeroListGroupsComponent,
    HeroListGroupPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // Define a set of routes.
    RouterModule.forRoot([
      { path: '', pathMatch: 'full', redirectTo: '/enter-leave' },
      { path: 'open-close', component: OpenCloseComponent },
      { path: 'status', component: StatusSliderComponent },
      // data property of each route defines the key animation-specific configuration
      // associated with a route. The data property value is passed into AppComponent when
      // the route changes. The data property value has to match the transitions defined in
      // the routeAnimation trigger. The data property names (i.e. animation) are arbitrary.
      { path: 'heroes', component: HeroListPageComponent, data: {animation: 'FilterPage'} },
      { path: 'hero-groups', component: HeroListGroupPageComponent },
      { path: 'enter-leave', component: HeroListEnterLeavePageComponent },
      { path: 'auto', component: HeroListAutoPageComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
