import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonTresComponent } from './boton-tres.component';

describe('BotonTresComponent', () => {
  let component: BotonTresComponent;
  let fixture: ComponentFixture<BotonTresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotonTresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonTresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
