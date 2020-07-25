import {newArray} from '@angular/compiler/src/util';
import {skipUntil} from 'rxjs/operators';


export interface RecipesNode {
  id: string;
  title: string;
  image?: string;
  children?: RecipesNode[];
}

export class Recipe implements RecipesNode{
  text?: string;
  url?: string;
  ingredients: string[][];
  images: string[];
  image: string;
  title: string;
  recipeInfo: string[][];
  id: string;

  constructor(title: string) {
    this.title = title;
  }


}
