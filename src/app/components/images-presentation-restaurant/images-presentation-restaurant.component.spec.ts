import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesPresentationRestaurantComponent } from './images-presentation-restaurant.component';

describe('ImagesPresentationRestaurantComponent', () => {
  let component: ImagesPresentationRestaurantComponent;
  let fixture: ComponentFixture<ImagesPresentationRestaurantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagesPresentationRestaurantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagesPresentationRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
