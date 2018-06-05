import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TileAppinfoComponent } from './tile-appinfo.component';

describe('TileAppinfoComponent', () => {
  let component: TileAppinfoComponent;
  let fixture: ComponentFixture<TileAppinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TileAppinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TileAppinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
