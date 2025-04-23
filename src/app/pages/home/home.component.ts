import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public searchKeys = [
    {name: 'Keyword', id: 1, value: 'keyword'},
    {name: 'Match Phrase Only', id: 2, value: 'matchPhrase'},
    {name: 'Recipe Number', id: 3, value: 'recipeNumber'},
  ];
}
