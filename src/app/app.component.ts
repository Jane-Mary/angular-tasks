import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-tasks';
  tasks: any = [];

  async ngOnInit():Promise<void> {
    try {
      const request = await fetch("http://localhost:3000/tasks",{ method:'GET' });
      console.log(request);
      
      if(request.ok && request.status === 200) {
        const response = await request.json()
        this.tasks = response.data
        console.log(response);
        
      }

    } catch (error) {
      console.log(error);
      
    }
  }
}
