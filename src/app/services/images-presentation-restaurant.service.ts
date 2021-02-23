import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImagesPresentationRestaurantService {

  constructor(private http:HttpClient) { }

  getInfoRestaurant(){
    return null;
  }
}
