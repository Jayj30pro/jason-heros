import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FighterSearchComponent } from './fighter-search.component';

describe('FighterSearchComponent', () => {
  let component: FighterSearchComponent;
  let fixture: ComponentFixture<FighterSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FighterSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FighterSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
