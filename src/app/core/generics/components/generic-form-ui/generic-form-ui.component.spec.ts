import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericFormUiComponent } from './generic-form-ui.component';

describe('GenericFormUiComponent', () => {
  let component: GenericFormUiComponent;
  let fixture: ComponentFixture<GenericFormUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenericFormUiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GenericFormUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
