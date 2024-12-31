import { Component } from '@angular/core';
//import { AppRoutingModule } from './app-routing.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'students-app';
  //id = 12345;
  n : number = 5;
  isDisabled = false;

}
