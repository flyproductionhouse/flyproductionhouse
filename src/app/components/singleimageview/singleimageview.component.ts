import { Component } from '@angular/core';
import { ReplaceExtensionPipe } from '../../replace-extension.pipe';
import { DataService } from '../../services/data.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-singleimageview',
  standalone: true,
  imports: [ReplaceExtensionPipe],
  templateUrl: './singleimageview.component.html',
  styleUrl: './singleimageview.component.css'
})
export class SingleimageviewComponent {
    singleImageUrl: any
    constructor(private dataService: DataService, private title: Title, private meta: Meta) {}
    ngOnInit(): void {
      this.title.setTitle(this.dataService.title);
      this.meta.addTags([
        { name: 'description', content: this.dataService.description },
        { name: 'keywords', content: this.dataService.keywords},
        { name: 'viewport', content: this.dataService.viewport}
      ])
        this.singleImageUrl = localStorage.getItem("singleImageUrl")
    }
}
