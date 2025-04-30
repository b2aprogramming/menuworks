import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { DATA } from '../constants';

@Component({
  selector: 'app-standard',
  templateUrl: './standard.component.html',
  styleUrls: ['./standard.component.scss']
})
export class StandardComponent implements OnInit {
  @ViewChild(MatPaginator) public paginator!: MatPaginator;
  public dataSource: MatTableDataSource<any> = new MatTableDataSource<any>(DATA);
  public listData!: Observable<any>;

  public standardList = [
      {name: 'Favorites', id: 1, data: [
        {name: 'My Favorites', selected: false, id: 1},
        {name: 'My Favorites2', selected: false, id: 2},
      ]},
      {name: 'Favorites 2', id: 1, data: [
        {name: 'My Favorites', selected: false, id: 1},
        {name: 'My Favorites2', selected: false, id: 2},
      ]},
      {name: 'Favorites3', id: 1, data: [
        {name: 'My Favorites', selected: false, id: 1},
        {name: 'My Favorites2', selected: false, id: 2},
      ]},
      {name: 'Favorites 4', id: 1, data: [
        {name: 'My Favorites', selected: false, id: 1},
        {name: 'My Favorites2', selected: false, id: 2},
      ]},
      {name: 'Favorites 5', id: 1, data: [
        {name: 'My Favorites', selected: false, id: 1},
        {name: 'My Favorites2', selected: false, id: 2},
      ]},
      {name: 'Favorites 6', id: 1, data: [
        {name: 'My Favorites', selected: false, id: 1},
        {name: 'My Favorites2', selected: false, id: 2},
      ]},
  ];
  public searchKeys = [
    {name: 'Keyword', id: 1, value: 'keyword'},
    {name: 'Match Phrase Only', id: 2, value: 'matchPhrase'},
    {name: 'Recipe Number', id: 3, value: 'recipeNumber'},
  ];
  constructor(private changeDetectorRef: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.changeDetectorRef.detectChanges();
    this.dataSource.paginator = this.paginator;
    this.listData = this.dataSource.connect();
  }

  ngOnDestroy() {
    if (this.dataSource) { 
      this.dataSource.disconnect(); 
    }
  }
  
}
