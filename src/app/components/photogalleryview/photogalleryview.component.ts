import { Component } from '@angular/core';
import { GoogledriveService } from '../../services/googledrive.service';
import { CommonModule } from '@angular/common';
import { ReplaceExtensionPipe } from '../../replace-extension.pipe';
import { Router } from '@angular/router';
import { CardStructure } from '../../interfaces/card-structure';
import { MediaFile } from '../../interfaces/media-file';
import { CapitalizePipe } from '../../capitalize.pipe';
import { Meta, Title } from '@angular/platform-browser';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-photogalleryview',
  standalone: true,
  imports: [CommonModule, ReplaceExtensionPipe, CapitalizePipe],
  templateUrl: './photogalleryview.component.html',
  styleUrl: './photogalleryview.component.css'
})
export class PhotogalleryviewComponent {
    private photoGalleryId: any;
    card: any;
    images: any[] = [];
    googleMapsUrl: string | undefined

    constructor(private googleDriveService: GoogledriveService, private dataService: DataService, private router: Router, private title: Title, private meta: Meta) {}

    ngOnInit(): void {
      this.title.setTitle(this.dataService.title);
      this.meta.addTags([
        { name: 'description', content: this.dataService.description },
        { name: 'keywords', content: this.dataService.keywords},
        { name: 'viewport', content: this.dataService.viewport}
      ])
        this.photoGalleryId = localStorage.getItem("photoGalleryId")
        this.googleDriveService.getAllMediaFromFolder(this.photoGalleryId).subscribe(ele=>{
          ele.media.forEach((imageObj)=>{
            if (imageObj.mimeType.startsWith("image/")) {
              this.images.push(imageObj)
            }
            if (imageObj.name.toUpperCase().includes("FLY_")) {
              // console.log(imageObj)
              this.card = imageObj
            }
          })
          this.sortImages();
          // console.log(this.images)
        })
    }

    sortImages() {
      this.images.sort((a, b) => {
        // Example: Sort by name (case-insensitive)
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();
  
        if (nameA < nameB) {
          return -1; // a comes before b
        }
        if (nameA > nameB) {
          return 1; // a comes after b
        }
        return 0; // names are equal
      });
    }

    viewFullImage(imageLink:string) {
      localStorage.setItem("singleImageUrl", imageLink)
      this.router.navigate(['image-view'])
    }

    openGoogleMaps(name: string) {
      const locationParts = name.replace('fly_', '').split('_');
      const query = locationParts.length > 2 ? locationParts[2] : locationParts.join(' ');
  
      // Encode the query to handle special characters
      const encodedQuery = encodeURIComponent(query);
      this.googleMapsUrl =  `https://www.google.com/maps/search/?api=1&query=${encodedQuery}`;
    }
}
