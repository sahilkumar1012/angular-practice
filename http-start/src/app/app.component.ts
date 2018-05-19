import { Component, OnInit } from '@angular/core';
import { ServerService } from './server.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private serverService : ServerService){}
  appName = 'yoyo';
  servers = [
    {
      name: 'Testserver',
      capacity: 10,
      id: this.generateId()
    },
    {
      name: 'Liveserver',
      capacity: 100,
      id: this.generateId()
    }
  ];

  ngOnInit(){
    console.log('Appname received from firebase');
    console.log(this.serverService.getAppName());
  }
  onAddServer(name: string) {
    this.servers.push({
      name: name,
      capacity: 50,
      id: this.generateId()
    });
  }
  private generateId() {
    return Math.round(Math.random() * 10000);
  }
  onSave(){
    this.serverService.storeServers(this.servers)
    .subscribe(
      (response : Response)=>{
        const data = response.json()
        console.log(data);
      },
      (error)=>{
        console.log(error);
      }
    );
  }
  onGet(){
    this.serverService.getServers().subscribe(
      (servers : any[])=>{
        for(let server of servers){
          this.servers=servers;
        }
      },
      (error)=> console.log(error)
    );
  }
}
