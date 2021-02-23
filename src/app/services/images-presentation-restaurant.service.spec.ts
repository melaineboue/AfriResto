import { TestBed } from '@angular/core/testing';

import { ImagesPresentationRestaurantService } from './images-presentation-restaurant.service';

describe('ImagesPresentationRestaurantService', () => {
  let service: ImagesPresentationRestaurantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImagesPresentationRestaurantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
