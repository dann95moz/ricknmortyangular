import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacesDialogComponent } from './places-dialog.component';

describe('PlacesDialogComponent', () => {
  let component: PlacesDialogComponent;
  let fixture: ComponentFixture<PlacesDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlacesDialogComponent]
    });
    fixture = TestBed.createComponent(PlacesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
