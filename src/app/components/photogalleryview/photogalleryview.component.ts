import { Component } from '@angular/core';
import { GoogledriveService } from '../../services/googledrive.service';
import { CommonModule } from '@angular/common';
import { ReplaceExtensionPipe } from '../../replace-extension.pipe';
import { Router } from '@angular/router';
import { CardStructure } from '../../interfaces/card-structure';
import { MediaFile } from '../../interfaces/media-file';

@Component({
  selector: 'app-photogalleryview',
  standalone: true,
  imports: [CommonModule, ReplaceExtensionPipe],
  templateUrl: './photogalleryview.component.html',
  styleUrl: './photogalleryview.component.css'
})
export class PhotogalleryviewComponent {
    private photoGalleryId: any;
    card: any;
    images: any[] = [];
    constructor(private googleDriveService: GoogledriveService, private router: Router) {}

    ngOnInit(): void {
        this.photoGalleryId = localStorage.getItem("photoGalleryId")
        this.googleDriveService.getAllMediaFromFolder(this.photoGalleryId).subscribe(ele=>{
          ele.media.forEach((imageObj)=>{
            if (imageObj.mimeType.startsWith("image/")) {
              this.images.push(imageObj)
            }
            if (imageObj.name.toUpperCase().includes("FLY_")) {
              console.log(imageObj)
              this.card = imageObj
            }
          })
          console.log(this.images)
        })
    }

    viewFullImage(imageLink:string) {
      localStorage.setItem("singleImageUrl", imageLink)
      this.router.navigate(['image-view'])
    }
}
