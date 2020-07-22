import {Component, OnInit} from '@angular/core';
import {Recipe, RecipesNode} from '../recipes-node';
import {Recipes} from '../skeleton';
import {NestedTreeControl} from '@angular/cdk/tree';
import {ArrayDataSource} from '@angular/cdk/collections';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  recipes: RecipesNode[] = Recipes;
  recipe: Recipe;

  treeControl = new NestedTreeControl<RecipesNode> (node => node.children);
  dataSource = new ArrayDataSource(this.recipes);

  constructor() { }

  ngOnInit(): void {
    this.createRecipes();
  }

  createRecipes(): void {
    const recipe: Recipe = {images: [], title: 'tresssst', ingredients: [], image: ''};
    recipe.title = 'test title';
    this.recipes[0].children.push(recipe);
    console.log(this.recipes);
  }

  hasChild = (_: number, node: RecipesNode) => !!node.children && node.children.length > 0;

  selectRecipe(recipe: Recipe): void  {
    this.recipe = recipe;
  }

}
