import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasualesComponent } from './casuales.component';

describe('CasualesComponent', () => {
  let component: CasualesComponent;
  let fixture: ComponentFixture<CasualesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasualesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CasualesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
