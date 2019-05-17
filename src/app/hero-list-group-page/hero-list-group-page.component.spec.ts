import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroListGroupPageComponent } from './hero-list-group-page.component';

describe('HeroListGroupPageComponent', () => {
  let component: HeroListGroupPageComponent;
  let fixture: ComponentFixture<HeroListGroupPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroListGroupPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroListGroupPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
