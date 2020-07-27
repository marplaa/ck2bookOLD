import {twoColTemplate} from './latex-2-column-template';
import {RecipesNode} from './recipes-node';
import {Md5} from 'ts-md5';

export class Renderer {

  imageList: string[] = [];

  constructor() {
  }

  renderNode(node: RecipesNode): string {

    let item;
    let renderedItem;
    let output = '';
    for (item of node.children) {
      console.log(item.title);

      if (item.children) { // if chapter
        if (item.isBottomChapter) {
          renderedItem = twoColTemplate.chapter.replace('{{title}}', item.title);
        } else {
          renderedItem = twoColTemplate.chapter_w_subchapters.replace('{{title}}', item.title);
        }
        renderedItem = renderedItem.replace('{{text}}', item.text);
        renderedItem = renderedItem.replace('{{image}}', Md5.hashStr(item.image));
        this.imageList.push(item.image);
        if (item.children.length > 0) {
          output += renderedItem.replace('{{children}}', this.renderNode(item));
        } else {
          output += renderedItem.replace('{{children}}', '');
        }

      } else {
        // item is a recipe
        renderedItem = twoColTemplate.recipe.replace('{{title}}', item.title);
        renderedItem = renderedItem.replace('{{text}}', item.text);
        renderedItem = renderedItem.replace('{{ingredients}}', item.title);
        renderedItem = renderedItem.replace('{{image}}', Md5.hashStr(item.image));
        this.imageList.push(item.image);
        output += renderedItem;
      }

    }
    return output;

  }

}
