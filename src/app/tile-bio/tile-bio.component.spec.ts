import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TileBioComponent } from './tile-bio.component';

describe('TileBioComponent', () => {
  let component: TileBioComponent;
  let fixture: ComponentFixture<TileBioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TileBioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TileBioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
