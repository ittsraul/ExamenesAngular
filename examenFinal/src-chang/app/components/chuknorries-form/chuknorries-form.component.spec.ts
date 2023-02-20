import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChuknorriesFormComponent } from './chuknorries-form.component';

describe('ChuknorriesFormComponent', () => {
  let component: ChuknorriesFormComponent;
  let fixture: ComponentFixture<ChuknorriesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChuknorriesFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChuknorriesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
