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
import {MatDividerModule} from '@angular/material/divider';
import { MatDialogModule} from '@angular/material/dialog';
import { RecipePreviewComponent } from './recipe-preview/recipe-preview.component';
import { ChapterDetailComponent } from './chapter-detail/chapter-detail.component';
import { DialogComponent } from './dialog/dialog.component';
import {MatMenuModule} from '@angular/material/menu';
import { ChapterEntryComponent } from './recipes-list/chapter-entry/chapter-entry.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';



@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    RecipesListComponent,
    RecipeComponent,
    IngredientsComponent,
    ImageListComponent,
    RecipePreviewComponent,
    ChapterDetailComponent,
    DialogComponent,

    ChapterEntryComponent,
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
    MatDividerModule,
    MatDialogModule,
    MatMenuModule,
    MatCheckboxModule,
    MatCardModule,
    MatRadioModule
  ],
  entryComponents: [DialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
