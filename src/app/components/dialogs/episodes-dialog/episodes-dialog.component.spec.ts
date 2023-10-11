import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodesDialogComponent } from './episodes-dialog.component';

describe('EpisodesDialogComponent', () => {
  let component: EpisodesDialogComponent;
  let fixture: ComponentFixture<EpisodesDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EpisodesDialogComponent]
    });
    fixture = TestBed.createComponent(EpisodesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
