import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  //or use 'styles' instead of 'styleUrls'
})
export class AppComponent {
  log = [];

  addLogToArray(){
    this.log.push(new Date());
  }
  
}
