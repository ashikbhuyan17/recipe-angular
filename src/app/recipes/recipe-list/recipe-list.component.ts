import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'this is simply a test', 'https://tse4.mm.bing.net/th?id=OIP.NNkoPIpJPVgTL38QDMvnPQHaE7&pid=Api&P=0&w=256&h=170')
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
