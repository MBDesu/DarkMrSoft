import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HexdumpComponent } from './hexdump.component';

describe('HexdumpComponent', () => {
  let component: HexdumpComponent;
  let fixture: ComponentFixture<HexdumpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HexdumpComponent]
    });
    fixture = TestBed.createComponent(HexdumpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
