import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-videogallery',
  standalone: true,
  imports: [],
  templateUrl: './videogallery.component.html',
  styleUrl: './videogallery.component.css'
})
export class VideogalleryComponent {
    constructor(private dataService: DataService, private title: Title, private meta: Meta) {}
    ngOnInit(): void {
      this.title.setTitle(this.dataService.title);
      this.meta.addTags([
        { name: 'description', content: this.dataService.description },
        { name: 'keywords', content: this.dataService.keywords},
        { name: 'viewport', content: this.dataService.viewport}
      ])
    }
}
