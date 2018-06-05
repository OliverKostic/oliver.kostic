import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TileHobbyComponent } from './tile-hobby.component';

describe('TileHobbyComponent', () => {
  let component: TileHobbyComponent;
  let fixture: ComponentFixture<TileHobbyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TileHobbyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TileHobbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
