import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroListAutoPageComponent } from './hero-list-auto-page.component';

describe('HeroListAutoPageComponent', () => {
  let component: HeroListAutoPageComponent;
  let fixture: ComponentFixture<HeroListAutoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroListAutoPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroListAutoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
