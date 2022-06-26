import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireAlbumComponent } from './formulaire-album.component';

describe('FormulaireAlbumComponent', () => {
  let component: FormulaireAlbumComponent;
  let fixture: ComponentFixture<FormulaireAlbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireAlbumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulaireAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
