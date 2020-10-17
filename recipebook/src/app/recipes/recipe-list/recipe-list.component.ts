import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';



@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("Štrukli sa sirom", "Tradicionalno zagorsko jelo", "https://picsum.photos/300/200")
  ];
  constructor() {}

  ngOnInit(): void {}
}
