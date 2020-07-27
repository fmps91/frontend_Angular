import { Component,HostListener } from '@angular/core';
import { environment } from "../environments/environment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  width: number = 0;

  @HostListener('window:resize', ['$event'])

	onResize(event) {
    this.width = event.target.innerWidth;
    environment.ancho = event.target.innerWidth;
  }





}
