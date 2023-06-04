import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportedRomsModalComponent } from './supported-roms-modal.component';

describe('SupportedRomsModalComponent', () => {
  let component: SupportedRomsModalComponent;
  let fixture: ComponentFixture<SupportedRomsModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SupportedRomsModalComponent]
    });
    fixture = TestBed.createComponent(SupportedRomsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
