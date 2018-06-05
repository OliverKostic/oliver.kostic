import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TileContactComponent } from './tile-contact.component';

describe('TileContactComponent', () => {
  let component: TileContactComponent;
  let fixture: ComponentFixture<TileContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TileContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TileContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
