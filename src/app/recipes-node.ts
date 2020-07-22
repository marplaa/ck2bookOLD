import {newArray} from '@angular/compiler/src/util';
import {skipUntil} from 'rxjs/operators';

class Ingredient {
  ingredient: string;
  amount: string;
}

export interface RecipesNode {
  title: string;
  image?: string;
  children?: RecipesNode[];
}

export class Recipe implements RecipesNode{
  text?: string;
  link?: string;
  ingredients: Ingredient[];
  images: string[];
  image: string;
  title: string;

  constructor(title: string) {
    this.title = title;
  }
}
