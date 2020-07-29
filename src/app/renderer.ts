import {twoColTemplate} from './latex-2-column-template';
import {RecipesNode} from './recipes-node';
import {Md5} from 'ts-md5';

export interface RenderedBook {
  content: string;
  images: string[];
}

export class Renderer {

  imageList: string[] = [];

  constructor() {
  }

  render(node: RecipesNode): RenderedBook {
    const content = twoColTemplate.frame.replace('{{content}}', this.renderNode(node));
    const images = this.imageList;
    return {content, images};
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
        renderedItem = renderedItem.replace('{{bg-image}}', Md5.hashStr(item.image));

        if (this.imageList.indexOf(item.image) === -1) {
          this.imageList.push(item.image);
        }
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
        renderedItem = renderedItem.replace('{{bg-image}}', Md5.hashStr(item.image));
        if (this.imageList.indexOf(item.image) === -1) {
          this.imageList.push(item.image);
        }
        output += renderedItem;
      }

    }
    return output;

  }

}
