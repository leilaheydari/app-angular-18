import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericTabelComponent } from './generic-tabel.component';

describe('GenericTabelComponent', () => {
  let component: GenericTabelComponent;
  let fixture: ComponentFixture<GenericTabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenericTabelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GenericTabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
