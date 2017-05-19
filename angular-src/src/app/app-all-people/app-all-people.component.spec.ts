import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAllPeopleComponent } from './app-all-people.component';

describe('AppAllPeopleComponent', () => {
  let component: AppAllPeopleComponent;
  let fixture: ComponentFixture<AppAllPeopleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppAllPeopleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppAllPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
