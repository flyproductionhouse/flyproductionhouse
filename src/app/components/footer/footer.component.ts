import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
    email:string = 'flyproductionhouse.info@gmail.com'
    telNo:string = '02245038072'
    youtube:string = '@flyproductionhouse'
    address:string = 'Vasari Hill Rd, Rustomjee Ease Zone Mall Malad West, Mumbai, Maharashtra 400104. 1st Floor Office no - 3068'
}
