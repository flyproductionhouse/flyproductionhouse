import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { YouTubePlayer, YOUTUBE_PLAYER_CONFIG } from '@angular/youtube-player';
import { PhotogalleryComponent } from './components/photogallery/photogallery.component';
import { VideogalleryComponent } from './components/videogallery/videogallery.component';
import { routes } from './app.routes';
import { GoogledriveService } from './services/googledrive.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "./components/footer/footer.component";
import { filter } from 'rxjs';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBgu76wPFD5wzPyIqC2qB6B2qABy-TFx2E",
  authDomain: "flyproductionhouse-f5ea1.firebaseapp.com",
  projectId: "flyproductionhouse-f5ea1",
  storageBucket: "flyproductionhouse-f5ea1.appspot.com",
  messagingSenderId: "212827303513",
  appId: "1:212827303513:web:25609222e18f37227e8b48"
};

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

  constructor(private router:Router) {}

  ngOnInit(): void {
    this.router.events.pipe(
      filter((event: any) => event instanceof NavigationEnd)
    ).subscribe(() => {
      window.scrollTo({ top: 0, behavior: 'instant' });
    });
  }
}
