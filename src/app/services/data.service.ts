import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  title:string =  "Fly Production House - One of the best photography and video editing services in mumbai";
  description:string = "Experience top-notch photography and video editing services from Fly Production House. We specialize in capturing stunning visuals and creating captivating videos."
  keywords:string = "Fly Production House offers photography, video editing, professional photography, video production, digital photography, video post-production, cinematic videography, photography studio, video editing studio, wedding photography services, corporate video production, commercial photography, product photography, real estate photography, event videography, music video production, aerial photography, drone videography, 4K video production"
  viewport:string = "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
  constructor() { }
}
