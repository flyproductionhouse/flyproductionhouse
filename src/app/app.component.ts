import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { YouTubePlayer, YOUTUBE_PLAYER_CONFIG } from '@angular/youtube-player';
import { PhotogalleryComponent } from './components/photogallery/photogallery.component';
import { VideogalleryComponent } from './components/videogallery/videogallery.component';
import { routes } from './app.routes';
import { GoogledriveService } from './services/googledrive.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    YouTubePlayer,
    NavbarComponent,
    PhotogalleryComponent,
    VideogalleryComponent,
    HttpClientModule,
    CommonModule,
    FooterComponent
],
  providers: [
      {
        provide: YOUTUBE_PLAYER_CONFIG,
        useValue: {
          disablePlaceholder: false
        }
      },
      GoogledriveService
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'flyhouseproduction';
}
