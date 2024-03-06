import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface unsplashResponse {
  urls: {
    regular: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class PhotosService {
  constructor(private http: HttpClient) {}

  getPhotos() {
    return this.http.get<unsplashResponse>(
      'https://api.unsplash.com/photos/random',
      {
        headers: {
          Authorization:
            'Client-ID PfAiyWaYBjVn1zZPV-8LI6Ua4h0SzTztvZSKVTmZduI',
        },
      }
    );
  }
}
