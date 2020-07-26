import {Component, Input, OnInit} from '@angular/core';
import {Recipe, RecipesNode} from '../recipes-node';



@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {

  @Input() node: RecipesNode;
  page = 1;
  displayedImages: string[];
  constructor() { }

  ngOnInit(): void {
    this.displayedImages = this.node.images.slice(0, 8);
  }

  selectPage(direction: number): void {
    const numPages = Math.ceil(this.node.images.length / 8);
    this.page = (this.page + direction + numPages) % numPages;

    this.displayedImages = this.node.images.slice(this.page * 8, this.page * 8 + 8);
  }

}
