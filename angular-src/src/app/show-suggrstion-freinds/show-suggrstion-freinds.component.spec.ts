import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSuggrstionFreindsComponent } from './show-suggrstion-freinds.component';

describe('ShowSuggrstionFreindsComponent', () => {
  let component: ShowSuggrstionFreindsComponent;
  let fixture: ComponentFixture<ShowSuggrstionFreindsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowSuggrstionFreindsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowSuggrstionFreindsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
