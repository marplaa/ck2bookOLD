import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../recipes-node';
import { RecipesService } from '../recipes.service';


@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  @Input() recipe: Recipe;
  modules = {toolbar: [
      ['bold', 'italic', 'underline', 'strike']]
  };
  model: string;

  constructor(private recipesService: RecipesService) { }

  ngOnInit(): void {
  }

  outputContent(): void {
    console.log(this.model);
  }



}
