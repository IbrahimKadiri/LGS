import { AfterViewInit, Component } from '@angular/core';
import { animateHistoire } from '../../animations';

@Component({
  selector: 'app-history',
  imports: [],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    animateHistoire();
  };
}
