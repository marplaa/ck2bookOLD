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

  recipes: RecipesNode[] = Recipes;
  recipe: Recipe;

  treeControl = new NestedTreeControl<RecipesNode> (node => node.children);
  dataSource = new ArrayDataSource(this.recipes);

  constructor(private recipesService: RecipesService, private modalService: NgbModal) { }

  ngOnInit(): void {
  }


  hasChild = (_: number, node: RecipesNode) => !!node.children && node.children.length > 0;

  selectRecipe(recipe: Recipe): void  {
    this.recipe = recipe;
  }

  addRecipe(chapter: RecipesNode): void {
    this.recipesService.getRecipe('https://www.chefkoch.de/rezepte/692211171805380/Blaetterteig-mit-Tomate-Zucchini-und-Feta.html')
      .subscribe(recipe => {this.recipe = recipe; chapter.children.push(recipe); console.log(chapter); } );
  }

  addChapter(chapter: RecipesNode, title: string): void {
    const newChapter = {
      id: chapter.id + '-' + Md5.hashStr(title),
      title,
    };
    chapter.children.push(newChapter);
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
      return this.recipes[0]; // chapter.children.find(chptr => chptr.id === id.join('-'));
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
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      if (result === 's') {this.addChapter(chapter, 'test'); }
    });
  }

}
