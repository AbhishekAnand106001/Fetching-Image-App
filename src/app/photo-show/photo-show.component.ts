import { Component } from '@angular/core';
import { PhotosService } from '../photos.service';

@Component({
  selector: 'app-photo-show',
  templateUrl: './photo-show.component.html',
  styleUrl: './photo-show.component.scss'
})
export class PhotoShowComponent {

  photoUrl!: string;

  constructor(private photosService: PhotosService) {
   this.fetchPhoto();
  }
  onClick(){
    console.log("hiiiii")
    this.fetchPhoto();
  }

  fetchPhoto(){
    this.photosService.getPhotos().subscribe((response)=>{
      this.photoUrl=response.urls.regular;
     })
  }


}
