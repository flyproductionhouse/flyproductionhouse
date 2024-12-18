import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contactus',
  standalone: true,
  imports: [],
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.css'
})
export class ContactusComponent {
  email:string = 'flyproductionhouse.info@gmail.com'
  telNo:string = '02245038072'
  youtube:string = '@flyproductionhouse'
  address:string = 'Vasari Hill Rd, Rustomjee Ease Zone Mall Malad West, Mumbai, Maharashtra 400104. 1st Floor Office no - 3068'

  constructor(private dataService: DataService, private title: Title, private meta: Meta) {}

  ngOnInit(): void {
    this.title.setTitle(this.dataService.title);
    this.meta.addTags([
      { name: 'description', content: this.dataService.description },
      { name: 'keywords', content: this.dataService.keywords},
      { name: 'viewport', content: this.dataService.viewport}
    ])
  }
}
