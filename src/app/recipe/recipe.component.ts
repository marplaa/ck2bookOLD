import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../recipes-node';


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

  constructor() { }

  ngOnInit(): void {
  }



}
