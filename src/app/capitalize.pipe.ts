import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize',
  standalone: true
})
export class CapitalizePipe implements PipeTransform {

  transform(value: string): unknown {
    if (!value) return value;
    return value
      .toLowerCase()    // Convert the entire string to lowercase first
      .split(' ')       // Split the string by spaces
      .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
      .join(' ');       // Rejoin the words with spaces
  }

}
