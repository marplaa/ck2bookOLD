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
        renderedItem = renderedItem.replace('{{text}}', item.text);
        renderedItem = renderedItem.replace('{{bg-image}}', Md5.hashStr(item.image) + '-' + twoColTemplate.chapterImageRes);

        // check if image is already in list
        if (this.imageList.filter(img => img[0] === item.image).length === 0) {
          const img: Image = {url: item.image, sizes: [{size: twoColTemplate.chapterImageRes,  filter: {}}], };
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
        renderedItem = renderedItem.replace('{{ingredients}}', item.title);
        renderedItem = renderedItem.replace('{{image}}', Md5.hashStr(item.image) + '-' + twoColTemplate.recipeImageRes);
        renderedItem = renderedItem.replace('{{bg-image}}', Md5.hashStr(item.image) + '-' + twoColTemplate.recipeBgImageRes);

        if (this.imageList.filter(img => img[0] === item.image).length === 0) {
          const img: Image = {url: item.image, sizes: [{size: twoColTemplate.recipeImageRes,  filter: {}},
              {size: twoColTemplate.recipeBgImageRes,  filter: {blur: 15}}]};
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
    console.log(tags[1]);
    for (let tag of tags) {
      console.log(tag);
      const newTag = '\\textbf{' + tag.replace('<strong>', '').replace('</strong>', '') + '}';
      console.log(newTag);
      text = text.replace(tag, newTag);
    }

    // replace <p>
    regex = /<\s*p[^>]*>(.*?)<\s*\/\s*p>/g;
    tags = text.match(regex);
    console.log(tags[1]);
    for (let tag of tags) {
      console.log(tag);
      const newTag = tag.replace('<p>', '').replace('</p>', '') + '\\newline\n';
      console.log(newTag);
      text = text.replace(tag, newTag);
    }

    // replace <u>
    regex = /<\s*u[^>]*>(.*?)<\s*\/\s*u>/g;
    tags = text.match(regex);
    console.log(tags[1]);
    for (let tag of tags) {
      console.log(tag);
      const newTag = '\\uline{' + tag.replace('<u>', '').replace('</u>', '') + '}';
      console.log(newTag);
      text = text.replace(tag, newTag);
    }

    // console.log(newTag);
    return text;
  }

}
