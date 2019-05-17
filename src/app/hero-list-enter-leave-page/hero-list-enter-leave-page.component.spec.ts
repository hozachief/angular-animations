import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroListEnterLeavePageComponent } from './hero-list-enter-leave-page.component';

describe('HeroListEnterLeavePageComponent', () => {
  let component: HeroListEnterLeavePageComponent;
  let fixture: ComponentFixture<HeroListEnterLeavePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroListEnterLeavePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroListEnterLeavePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
