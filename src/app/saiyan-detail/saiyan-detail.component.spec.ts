import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaiyanDetailComponent } from './saiyan-detail.component';

describe('SaiyanDetailComponent', () => {
  let component: SaiyanDetailComponent;
  let fixture: ComponentFixture<SaiyanDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaiyanDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaiyanDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
