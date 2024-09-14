import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PhotogalleryComponent } from './components/photogallery/photogallery.component';
import { VideogalleryComponent } from './components/videogallery/videogallery.component';
import { PhotogalleryviewComponent } from './components/photogalleryview/photogalleryview.component';
import { SingleimageviewComponent } from './components/singleimageview/singleimageview.component';

export const routes: Routes = [
    { 'path': '', component: HomeComponent },
    { 'path': 'photo-gallery', component: PhotogalleryComponent},
    { 'path': 'video-gallery', component: VideogalleryComponent},
    { 'path': 'photo-gallery-view', component: PhotogalleryviewComponent},
    { 'path': 'image-view', component: SingleimageviewComponent},
];
