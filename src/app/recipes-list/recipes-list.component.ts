import {Component, Inject, OnInit} from '@angular/core';
import {Recipe, RecipesNode} from '../recipes-node';
import {Recipes} from '../skeleton';
import {NestedTreeControl} from '@angular/cdk/tree';
import {ArrayDataSource} from '@angular/cdk/collections';
import { RecipesService } from '../recipes.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Md5 } from 'ts-md5';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  recipes: RecipesNode;
  recipe: Recipe;
  chapter: RecipesNode;

  newChapterTitle = '';
  newRecipeUrl: 'https://www.chefkoch.de/rezepte/1247411229689036/Pizza-Baellchen.html';


  constructor(private recipesService: RecipesService,
              private modalService: NgbModal,
              @Inject(LOCAL_STORAGE) private storage: StorageService) {
    this.recipes = recipesService.recipes;
  }

  ngOnInit(): void {
    const loadedRecipes = JSON.parse(this.storage.get('book'));
    if (loadedRecipes) {
      this.recipesService.recipes = loadedRecipes;
    }
  }


  hasChild = (node: RecipesNode) => !!node.children && node.children.length > 0;

  selectRecipe(recipe: Recipe): void  {
    this.recipe = recipe;
  }



  showChapter(chapterID: string): void {
    const chapter = this.recipesService.getNodeById(chapterID);
    alert(chapter.title);
  }



  openNewChapterModal(content, chapter): void {
    this.chapter = chapter;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      if (result === 's') {this.recipesService.addChapter(chapter, this.newChapterTitle); }
    });
  }

  openNewRecipeModal(content, chapter): void {
    this.chapter = chapter;
    this.modalService.open(content, {ariaLabelledBy: 'nr-title'}).result.then((result) => {
      if (result === 's') {this.recipesService.addRecipe(chapter, this.newRecipeUrl); }
    });
  }

  isRecipe(node: RecipesNode): boolean {
    return !node.children;
  }

  save(): void {
    this.storage.set('book', JSON.stringify(this.recipes));
  }

  /*private makeIngredientsArray(recipe: Recipe) {
    let ingredients: [];
    let ingredient;
    for (ingredient in recipe.ingredients) {


    }
  }*/
}
