import {newArray} from '@angular/compiler/src/util';
import {skipUntil} from 'rxjs/operators';


export interface RecipesNode {
  id: string;
  text: string;
  title: string;
  image?: string;
  images?: string[];
  children?: RecipesNode[];
}

export class Recipe implements RecipesNode{
  url?: string;
  ingredients: string[][];
  image: string;
  images: string[];
  title: string;
  recipeInfo: string[][];
  id: string;
  text: string;
  constructor(title: string) {
    this.title = title;
  }


}
