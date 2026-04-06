import { AfterViewInit, Component } from '@angular/core';
import { animateContact } from '../../animations';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    animateContact();
  }
}
