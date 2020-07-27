import {Inject, Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Recipe, RecipesNode} from './recipes-node';
import {Recipes} from './skeleton';
import {Md5} from 'ts-md5';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { images } from './chapter-images';
import {twoColTemplate} from './latex-2-column-template';
import { Renderer } from './renderer';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  recipes = Recipes;
  recipe: Recipe;
  chapter: RecipesNode = {id: '', title: '', children: [], image: '', images: images.cooking, text: ''};

  constructor(private http: HttpClient, @Inject(LOCAL_STORAGE) private storage: StorageService) {
    const loadedRecipes = JSON.parse(this.storage.get('book'));
    if (loadedRecipes) {
      this.recipes = loadedRecipes;
    }
  }

  getRecipeFromUrl(url: string): Observable<Recipe> {
    const reqUrl = 'http://localhost:4200/get/get_recipe_data_json_get?url=' + url;
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


  addRecipe(chapter: RecipesNode, url: string): void {
    this.getRecipeFromUrl(url)
      .subscribe(recipe => {
          recipe.id = this.generateId(chapter, recipe.title);
          this.recipe = recipe;
          chapter.children.push(recipe);
          console.log(recipe);
          // this.makeIngredientsArray(recipe);

        }
      );
    chapter.isBottomChapter = true;
  }

  generateId(parent: RecipesNode, text: string): string {
    let id = 'x';
    do {
      id = parent.id + '-' + Md5.hashStr(text + id).toString().substr(0, 3);
    } while (parent.children.find(node => node.id === id ));
    return id;
  }



  /*
  * Adds a new chapter to the recipes tree.
  *
  * chapter: parent chapter to add the new chapter to
  *
  * */

  addChapter(chapter: RecipesNode, title: string): void {
    const newId = this.generateId(chapter, this.chapter.title);

    const newChapter = {
      id: newId,
      images: images.cooking,
      image: images.cooking[0],
      title,
      text: 'Lorem ipsum',
      children: []
    };
    chapter.children.push(newChapter);
  }

  save(): void {
    this.storage.set('book', JSON.stringify(this.recipes));
  }

  delete(): void {
    this.storage.set('book', JSON.stringify(Recipes));
    this.recipes = Recipes;
  }



  render(): string {
    const renderer = new Renderer();
    return  twoColTemplate.frame.replace('{{content}}', renderer.renderNode(this.recipes));
  }
}
