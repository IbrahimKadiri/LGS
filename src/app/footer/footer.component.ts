import { AfterViewInit, Component } from '@angular/core';
import { animateFooter } from '../../animations';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    animateFooter();
  }
}
