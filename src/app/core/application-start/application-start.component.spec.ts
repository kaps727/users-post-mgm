import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationStartComponent } from './application-start.component';

describe('ApplicationStartComponent', () => {
  let component: ApplicationStartComponent;
  let fixture: ComponentFixture<ApplicationStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
