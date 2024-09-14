import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleimageviewComponent } from './singleimageview.component';

describe('SingleimageviewComponent', () => {
  let component: SingleimageviewComponent;
  let fixture: ComponentFixture<SingleimageviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleimageviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SingleimageviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
