import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormStarwComponent } from './form-starw.component';

describe('FormStarwComponent', () => {
  let component: FormStarwComponent;
  let fixture: ComponentFixture<FormStarwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormStarwComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormStarwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
