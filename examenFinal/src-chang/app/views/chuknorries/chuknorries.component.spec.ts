import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChuknorriesComponent } from './chuknorries.component';

describe('ChuknorriesComponent', () => {
  let component: ChuknorriesComponent;
  let fixture: ComponentFixture<ChuknorriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChuknorriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChuknorriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
