import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotogalleryviewComponent } from './photogalleryview.component';

describe('PhotogalleryviewComponent', () => {
  let component: PhotogalleryviewComponent;
  let fixture: ComponentFixture<PhotogalleryviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotogalleryviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhotogalleryviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
