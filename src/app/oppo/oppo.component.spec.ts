import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OppoComponent } from './oppo.component';

describe('OppoComponent', () => {
  let component: OppoComponent;
  let fixture: ComponentFixture<OppoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OppoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OppoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
