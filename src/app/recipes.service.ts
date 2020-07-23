import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Recipe} from './recipes-node';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor(private http: HttpClient) { }

  getRecipe(url: string): Observable<Recipe> {
    const reqUrl = 'http://localhost:4200/create/get_recipe_data_json_get/?url=' + url;
    return this.http.get<Recipe>(reqUrl);
  }
}
