import {Component, OnInit} from '@angular/core';
import {Recipe, RecipesNode} from '../recipes-node';
import {Recipes} from '../skeleton';
import {NestedTreeControl} from '@angular/cdk/tree';
import {ArrayDataSource} from '@angular/cdk/collections';
import { RecipesService } from '../recipes.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Md5 } from 'ts-md5';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  recipes: RecipesNode = Recipes;
  recipe: Recipe;
  chapter: RecipesNode = {id: '', title: '', children: []};
  newChapterTitle = '';
  newRecipeUrl: '';

  treeControl = new NestedTreeControl<RecipesNode> (node => node.children);
  dataSource = new ArrayDataSource(this.recipes.children);

  constructor(private recipesService: RecipesService, private modalService: NgbModal) { }

  ngOnInit(): void {
  }


  hasChild = (node: RecipesNode) => !!node.children && node.children.length > 0;

  selectRecipe(recipe: Recipe): void  {
    this.recipe = recipe;
  }

  updateTreeView(): void{
    this.dataSource = new ArrayDataSource(this.recipes.children);
  }

  addRecipe(chapter: RecipesNode): void {
    this.recipesService.getRecipe(this.newRecipeUrl)
      .subscribe(recipe => {this.recipe = recipe; chapter.children.push(recipe); console.log(recipe)} );
  }

  /*
  * Adds a new chapter to the recipes tree.
  *
  * chapter: parent chapter to add the new chapter to
  *
  * */

  addChapter(chapter: RecipesNode): void {
    let newId = 'x';
    do {
      newId = chapter.id + '-' + Md5.hashStr(this.newChapterTitle + newId).toString().substr(0, 3);
    } while (chapter.children.find(node => node.id === newId ));

    const newChapter = {
      id: newId,
      title: this.newChapterTitle,
      children: []
    };
    chapter.children.push(newChapter);
    this.newChapterTitle = '';
  }

  showChapter(chapterID: string): void {
    const chapter = this.getNodeById(chapterID);
    alert(chapter.title);
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

  openNewChapterModal(content, chapter): void {
    this.chapter = chapter;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      if (result === 's') {this.addChapter(chapter); }
    });
  }

  openNewRecipeModal(content, chapter): void {
    this.chapter = chapter;
    this.modalService.open(content, {ariaLabelledBy: 'nr-title'}).result.then((result) => {
      if (result === 's') {this.addRecipe(chapter); }
    });
  }

  isRecipe(node: RecipesNode): boolean {
    return !node.children;
  }


}
