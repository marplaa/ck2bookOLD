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
  renderOutput: string;

  newChapterTitle = '';
  newRecipeUrl: 'https://www.chefkoch.de/rezepte/1247411229689036/Pizza-Baellchen.html';


  constructor(public recipesService: RecipesService,
              private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.recipes = this.recipesService.recipes;
  }


  hasChild = (node: RecipesNode) => !!node.children && node.children.length > 0;

  selectRecipe(recipe: Recipe): void  {
    this.recipe = recipe;
  }



  showChapter(chapterID: string): void {
    const chapter = this.recipesService.getNodeById(chapterID);
    alert(chapter.title);
  }



  openNewChapterModal(content, chapter: string): void {
    this.chapter = this.recipesService.getNodeById(chapter);
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      if (result === 's') {this.recipesService.addChapter(this.chapter, this.newChapterTitle); }
    });
  }

  openNewRecipeModal(content, chapter: string): void {
    this.chapter = this.recipesService.getNodeById(chapter);
    this.modalService.open(content, {ariaLabelledBy: 'nr-title'}).result.then((result) => {
      if (result === 's') {this.recipesService.addRecipe(this.chapter, this.newRecipeUrl); }
    });
  }

  isRecipe(node: RecipesNode): boolean {
    return !node.children;
  }

  isBottomChapter(node: RecipesNode): boolean {
    return node.isBottomChapter;
  }

  renderHere(): void {
    // this.renderOutput = this.recipesService.render();
  }

  render(): void {
    // const renderedBook = this.recipesService.render();
    this.recipesService.requestCompilation();

  }

  /*private makeIngredientsArray(recipe: Recipe) {
    let ingredients: [];
    let ingredient;
    for (ingredient in recipe.ingredients) {


    }
  }*/
}
