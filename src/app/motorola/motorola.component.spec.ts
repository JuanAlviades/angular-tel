import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorolaComponent } from './motorola.component';

describe('MotorolaComponent', () => {
  let component: MotorolaComponent;
  let fixture: ComponentFixture<MotorolaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MotorolaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MotorolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
