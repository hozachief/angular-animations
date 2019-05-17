import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroListAutoComponent } from './hero-list-auto.component';

describe('HeroListAutoComponent', () => {
  let component: HeroListAutoComponent;
  let fixture: ComponentFixture<HeroListAutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroListAutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroListAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
