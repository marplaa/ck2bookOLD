import {newArray} from '@angular/compiler/src/util';
import {skipUntil} from 'rxjs/operators';

class Ingredient {
  ingredient: string;
  amount: string;
}

export interface RecipesNode {
  id: string;
  title: string;
  image?: string;
  children?: RecipesNode[];
}

export class Recipe implements RecipesNode{
  text?: string;
  url?: string;
  ingredients: Ingredient[];
  images: string[];
  image: string;
  title: string;
  id: string;

  constructor(title: string) {
    this.title = title;
  }


}
