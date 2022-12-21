import { Component } from '@angular/core';

@Component({
  selector: 'app-servers', //'[app-servers]' would be a css selector by attribute, so we would use <div app-servers></div> instead using the tag <app-servers></app-servers>
  //or select by class with '.app-servers'
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer: boolean = false;
  serverCreationStatus = 'no server created';
  serverName= '';
  serverCreated = false;
  servers =['Testserver', 'Testserver 2'];

  //when new server component gets created (= when loading the page), we will wait 2s and then activate the button, see server.component.html
  constructor(){
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000); //normal JS function, lambda style. after 2s, allowNewServer will change to true
  }

  onCreateServer(){
    this.serverCreated=true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'server was created with name ' + this.serverName;
  }

  onUpdateServerName(event: any){ //param of any object type
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value; //same as event.target.value;, without casting
  }

}
