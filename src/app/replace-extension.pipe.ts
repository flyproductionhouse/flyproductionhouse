import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceExtension',
  standalone: true
})
export class ReplaceExtensionPipe implements PipeTransform {

  transform(value: string): string {
    // Remove the file extension
    if (value.includes("drive")) {
      return value.replace(/^https:\/\/drive\.google\.com\/file\/d\//, '').replace(/\/view\?usp=drivesdk$/, '')
    }
    return value.replace(/\.(jpg|jpeg|png|gif|pdf)$/i, "");
    
  }
}
