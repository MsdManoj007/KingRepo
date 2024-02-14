import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeespageComponent } from './feespage.component';

describe('FeespageComponent', () => {
  let component: FeespageComponent;
  let fixture: ComponentFixture<FeespageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeespageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeespageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
