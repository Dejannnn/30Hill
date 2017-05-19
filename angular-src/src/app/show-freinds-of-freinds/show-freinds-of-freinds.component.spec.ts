import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowFreindsOfFreindsComponent } from './show-freinds-of-freinds.component';

describe('ShowFreindsOfFreindsComponent', () => {
  let component: ShowFreindsOfFreindsComponent;
  let fixture: ComponentFixture<ShowFreindsOfFreindsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowFreindsOfFreindsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowFreindsOfFreindsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
