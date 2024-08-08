import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonDosComponent } from './boton-dos.component';

describe('BotonDosComponent', () => {
  let component: BotonDosComponent;
  let fixture: ComponentFixture<BotonDosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotonDosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
