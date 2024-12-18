import { Component } from '@angular/core';
import { YouTubePlayer } from '@angular/youtube-player';
import { GoogledriveService } from '../../services/googledrive.service';
import { DataService } from '../../services/data.service';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [YouTubePlayer],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
    constructor(private googleDriveService: GoogledriveService, private dataService: DataService, private meta: Meta, private title: Title) {}
    player : any = { autoplay: 1, mute: 1, controls: 0 }

    ngOnInit() {
      this.title.setTitle(this.dataService.title);
      this.meta.addTags([
        { name: 'description', content: this.dataService.description },
        { name: 'keywords', content: this.dataService.keywords},
        { name: 'viewport', content: this.dataService.viewport}
      ])
    }
}
