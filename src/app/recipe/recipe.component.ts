import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../recipes-node';
import { RecipesService } from '../recipes.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  recipe: Recipe;
  modules = {toolbar: [
      ['bold', 'italic', 'underline', 'strike']]
  };
  model: string;

  constructor(private recipesService: RecipesService, private route: ActivatedRoute, private location: Location) {
    this.recipe = recipesService.getRecipeById(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
  }

  outputContent(): void {
    console.log(this.model);
  }





}
