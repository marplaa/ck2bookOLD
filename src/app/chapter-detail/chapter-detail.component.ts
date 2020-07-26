import { Component, OnInit } from '@angular/core';
import {RecipesNode} from '../recipes-node';
import {RecipesService} from '../recipes.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-chapter-detail',
  templateUrl: './chapter-detail.component.html',
  styleUrls: ['./chapter-detail.component.css']
})
export class ChapterDetailComponent implements OnInit {

  modules = {toolbar: [
      ['bold', 'italic', 'underline', 'strike']]
  };
  model: string;
  chapter: RecipesNode;

  constructor(private recipesService: RecipesService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    this.chapter = this.recipesService.getNodeById(this.route.snapshot.paramMap.get('id'));
  }

}
