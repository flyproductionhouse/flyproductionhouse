import { Component } from '@angular/core';
import { GoogledriveService } from '../../services/googledrive.service';
import { FolderStructure } from '../../interfaces/folder-structure';
import { CardStructure } from '../../interfaces/card-structure';
import { CommonModule } from '@angular/common';
import { ReplaceExtensionPipe } from '../../replace-extension.pipe';
import { Route, Router } from '@angular/router';
import { CapitalizePipe } from '../../capitalize.pipe';
import { DataService } from '../../services/data.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-photogallery',
  standalone: true,
  imports: [CommonModule, ReplaceExtensionPipe, CapitalizePipe],
  templateUrl: './photogallery.component.html',
  styleUrl: './photogallery.component.css'
})
export class PhotogalleryComponent {
  private folderId = "1wkMXx2Fdk1DfRFrAVbM2TXknV1FFoO_W"
  private images: any[] | undefined;
  private mediaJson: { files: any[]; } | undefined;
  folderStructure: FolderStructure | null = null;
  subFolders: FolderStructure[] = [];
  medias: CardStructure[] = [];
  card: CardStructure | undefined;


  constructor(private googleDriveService: GoogledriveService, private router: Router, private dataService: DataService, private title: Title, private meta: Meta) {}

  ngOnInit(): void {
    this.title.setTitle(this.dataService.title);
    this.meta.addTags([
      { name: 'description', content: this.dataService.description },
      { name: 'keywords', content: this.dataService.keywords},
      { name: 'viewport', content: this.dataService.viewport}
    ])

    this.googleDriveService.getAllMediaFromFolder(this.folderId).subscribe(folder => {
      this.folderStructure = folder;
      this.subFolders = folder.subfolders;
      console.log('Folder Structure:', this.folderStructure);
      console.log('Sub Folders:', this.subFolders);
      this.subFolders.forEach((ele) => {
        const card: CardStructure = {
          id: ele.id,
          mediaUrl: '',
          mediaName: ''
        }
        ele.media.forEach((media)=>{
          if (media.name.toUpperCase().includes("FLY")) {
              card.mediaUrl = media.webViewLink
              card.mediaName = media.name
          }
        })
        this.medias.push(card);
      })
      console.log(this.medias)
    });
  }

  viewGallery(cardId: string) {
    localStorage.setItem("photoGalleryId", cardId)
    this.router.navigate(["photo-gallery-view"])
  }
}
