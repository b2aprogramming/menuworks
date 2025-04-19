import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'menuworks-ui-15-new';
  menus = [
    {
      name: 'Home',
      link: '/',
      icon: 'home'
    },
    {
      name: 'Ingredients',
      link: '/ingredients',
      icon: 'info'
    }
   
  ]
}
