import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestComponent } from './test/test.component';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { RecipeComponent } from './recipe/recipe.component';
import { QuillModule } from 'ngx-quill';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    RecipesListComponent,
    RecipeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DragDropModule,
    NgbModule,
    CdkTreeModule,
    MatIconModule,
    MatButtonModule,
    QuillModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
