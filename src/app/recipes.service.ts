import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Recipe, RecipesNode} from './recipes-node';
import {Recipes} from './skeleton';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  recipes = Recipes;
  recipe: Recipe;
  chapter: RecipesNode = {id: '', title: '', children: []};

  constructor(private http: HttpClient) { }

  getRecipeFromUrl(url: string): Observable<Recipe> {
    const reqUrl = 'http://localhost:4200/create/get_recipe_data_json_get/?url=' + url;
    return this.http.get<Recipe>(reqUrl);
  }

  getRecipeById(id: string): Recipe {
    return this.getNodeById(id) as Recipe;
  }

  getNodeById(id: string): RecipesNode {
    const idArray = id.split('-');
    return this.getNodeByIdRec(idArray);
  }

  getNodeByIdRec(id: string[]): RecipesNode{
    if (id.length === 1) {
      return this.recipes; // chapter.children.find(chptr => chptr.id === id.join('-'));
    }
    const parentChapter = this.getNodeByIdRec(id.slice(0, id.length - 1 ));
    return parentChapter.children.find(chptr => chptr.id === id.join('-'));
    // return this.getNodeByIdRec(childChapter, id);

    /*const path = id.split('-');
    let currentChapter = (this.recipes)[0];

    let i: number;
    for (i = 1; i < path.length - 1; i++) {
      currentChapter = currentChapter.children.find(chapter => chapter.id === path[i]);
    }
    currentChapter = currentChapter.children.find(chapter => chapter.id === path[i]);

    // alert(currentChapter["text"]);
    return currentChapter;*/
  }
}
