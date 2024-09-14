import { Component } from '@angular/core';
import { YouTubePlayer } from '@angular/youtube-player';
import { GoogledriveService } from '../../services/googledrive.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [YouTubePlayer],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
    constructor(private googleDriveService: GoogledriveService) {}
}
