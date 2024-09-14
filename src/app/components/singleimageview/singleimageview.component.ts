import { Component } from '@angular/core';
import { ReplaceExtensionPipe } from '../../replace-extension.pipe';

@Component({
  selector: 'app-singleimageview',
  standalone: true,
  imports: [ReplaceExtensionPipe],
  templateUrl: './singleimageview.component.html',
  styleUrl: './singleimageview.component.css'
})
export class SingleimageviewComponent {
    singleImageUrl: any
    ngOnInit(): void {
        this.singleImageUrl = localStorage.getItem("singleImageUrl")
    }
}
