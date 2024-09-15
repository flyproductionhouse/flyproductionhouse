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
    player : any = { autoplay: 1, mute: 1, controls: 0 }

    ngOnInit() {
      setTimeout(() => {
        this.hideGifAndShowVideo();
      }, 3000);
    }

    hideGifAndShowVideo() {
      const flyLogo = document.getElementById('flyLogo');
      const videoContainer = document.getElementById('videoContainer');
  
      if (flyLogo) {
        flyLogo.style.display = 'none'; // Hide the GIF
      }
      if (videoContainer) {
        videoContainer.style.display = 'block'; // Show the video
      }
    }
}
