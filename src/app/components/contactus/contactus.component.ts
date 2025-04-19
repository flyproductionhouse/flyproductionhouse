import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Meta, Title } from '@angular/platform-browser';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

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

  sendEmail(event: Event) {
    event.preventDefault(); // Prevent page reload

    emailjs.sendForm(
      'service_ntkgkpj',
      'template_2rgie1a',
      event.target as HTMLFormElement,
      '34Of9h2idRUBQAfCE'
    )
    .then((result) => {
      console.log('Email successfully sent!', result.text);
      alert('Message sent successfully!');
      (event.target as HTMLFormElement).reset();
    })
    .catch((error) => {
      console.error('Error sending email:', error.text);
      alert('Oops! Something went wrong.');
    });
  }

  ngOnInit(): void {
    this.title.setTitle(this.dataService.title);
    this.meta.addTags([
      { name: 'description', content: this.dataService.description },
      { name: 'keywords', content: this.dataService.keywords},
      { name: 'viewport', content: this.dataService.viewport}
    ])
  }
}
