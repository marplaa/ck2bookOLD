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
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { AppRoutingModule } from './app-routing.module';
import {MatInputModule} from '@angular/material/input';
import { ImageListComponent } from './image-list/image-list.component';
import {MatGridListModule} from '@angular/material/grid-list';



@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    RecipesListComponent,
    RecipeComponent,
    IngredientsComponent,
    ImageListComponent,
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
    FormsModule,
    HttpClientModule,
    MatTableModule,
    AppRoutingModule,
    MatInputModule,
    MatGridListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
