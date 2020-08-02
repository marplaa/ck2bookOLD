import {twoColTemplate} from './latex-2-column-template';
import {RecipesNode} from './recipes-node';
import {Md5} from 'ts-md5';

export interface RenderedBook {
  id: string;
  content: string;
  images: Image[];
}

interface Size {
  size: string;
  filter: {};
}

interface Image {
  url: string;
  sizes: Size[];
}

export class Renderer {

  imageList: Image[] = [];

  constructor() {
  }

  render(node: RecipesNode): RenderedBook {

    const content = twoColTemplate.frame.replace('{{content}}', this.renderNode(node));
    const id = '' + Md5.hashStr(content);
    const images = this.imageList;
    return {id, content, images};
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
        let text = '';
        if (item.text !== null) {
          text = '\\begin{mytextbox}' + this.htmlToTex(item.text) + '\\end{mytextbox}\n';
        }
        renderedItem = renderedItem.replace('{{text}}', text);
        renderedItem = renderedItem.replace('{{bg-image}}', Md5.hashStr(item.image) + '-' + twoColTemplate.chapterImageRes);

        // check if image is already in list
        if (this.imageList.filter(img => img[0] === item.image).length === 0) {
          const img: Image = {url: item.image, sizes: [{size: twoColTemplate.chapterImageRes, filter: {}}] };
          this.imageList.push(img);
        }

        if (item.children.length > 0) {
          output += renderedItem.replace('{{children}}', this.renderNode(item));
        } else {
          output += renderedItem.replace('{{children}}', '');
        }

      } else {
        // item is a recipe
        renderedItem = twoColTemplate.recipe.replace('{{title}}', item.title);
        renderedItem = renderedItem.replace('{{text}}', this.htmlToTex(item.text));
        renderedItem = renderedItem.replace('{{ingredients}}', this.renderTable(item.ingredients));
        renderedItem = renderedItem.replace('{{image}}', Md5.hashStr(item.image) + '-' + twoColTemplate.recipeImageRes);
        renderedItem = renderedItem.replace('{{bg-image}}', Md5.hashStr(item.image) + '-' + twoColTemplate.recipeBgImageRes);

        if (this.imageList.filter(img => img[0] === item.image).length === 0) {
          const img: Image = {
            url: item.image, sizes: [{size: twoColTemplate.recipeImageRes, filter: {}},
              {size: twoColTemplate.recipeBgImageRes, filter: {blur: 15, brightness: 1.5}}]
          };
          this.imageList.push(img);
        }
        output += renderedItem;
      }

    }
    return output;

  }

  htmlToTex(text: string): string {
    // replace <strong>
    let regex = /<\s*strong[^>]*>(.*?)<\s*\/\s*strong>/g;
    let tags = text.match(regex);
    if (tags) {
      for (const tag of tags) {

        const newTag = '\\textbf{' + tag.replace('<strong>', '').replace('</strong>', '') + '}';

        text = text.replace(tag, newTag);
      }
    }

    // replace <p>
    regex = /<\s*p[^>]*>(.*?)<\s*\/\s*p>/g;
    tags = text.match(regex);
    if (tags) {
      for (const tag of tags) {

        const newTag = tag.replace('<p>', '').replace('</p>', '') + '\\newline\n';

        text = text.replace(tag, newTag);
      }
    }

    // replace <u>
    regex = /<\s*u[^>]*>(.*?)<\s*\/\s*u>/g;
    tags = text.match(regex);
    if (tags) {
      for (const tag of tags) {

        const newTag = '\\uline{' + tag.replace('<u>', '').replace('</u>', '') + '}';

        text = text.replace(tag, newTag);
      }
    }


    text = text.replace(/<\/br>/g, ' \\\\\n');
    text = text.replace(/%/g, '\\%');

    // console.log(newTag);
    return text;
  }


  texSave(text: string): string {
    text = text.replace(/%/g, '\\%');
    return text;
  }

  renderTable(ingredients: string[]): string {
    console.log(ingredients);
    let table = '\\begin{tabulary}{7.8cm}{R|L}\n';
    for (const ingredient of ingredients) {
      if ( ingredient.length === 2) {
        table += this.texSave(ingredient[0]) + ' & ' + this.texSave(ingredient[1]) + ' \\\\\n';
      } else if (ingredient.length === 1) {
        if (ingredient[0] !== '') {
          table += '\\hline\n\\textbf{' + this.texSave(ingredient[0]) +  '} \\\\\n';
        }
      }
    }
    table += '\\end{tabulary}\n';
    return table;
  }

}
