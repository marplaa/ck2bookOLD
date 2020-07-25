import {Recipe, RecipesNode} from './recipes-node';

const recipe: Recipe = {
  url: 'https://www.chefkoch.de/rezepte/drucken/1247411229689036/Pizza-Baellchen.html',
  title: 'Pizza-Bällchen',
  ingredients: [
    [
      ''
    ],
    [
      '300 g',
      'Mehl'
    ],
    [
      '250 g',
      'Quark'
    ],
    [
      '1 Pck.',
      'Backpulver'
    ],
    [
      '8 EL',
      'Milch'
    ],
    [
      '6 EL',
      'Öl'
    ],
    [
      '1 TL',
      'Salz'
    ],
    [
      '1 EL',
      'Zucker'
    ],
    [
      '100 g',
      'Röstzwiebeln'
    ],
    [
      '200 g',
      'Käse, gerieben'
    ],
    [
      '100 g',
      'Schinken, gewürfelt'
    ]
  ],
  recipeInfo: [
    [
      'Arbeitszeit',
      'ca. 20 Minuten'
    ],
    [
      'Koch-/Backzeit',
      'ca. 40 Minuten'
    ],
    [
      'Gesamtzeit',
      'ca. 1 Stunde'
    ],
    [
      'Schwierigkeitsgrad',
      'normal'
    ],
    [
      'Kalorien p. P.',
      'ca. 3055'
    ]
  ],
  text: 'Mehl, Quark, Backpulver, Milch, Öl, Salz und Zucker gut verkneten. Die übrigen Zutaten zum Teig geben. Noch mal durchkneten und kleine Bällchen formen. Auf ein Backblech mit Backpapier legen und für 30 - 40 Min. bei 180 Grad in den Ofen.</br>Für Feiern mache ich mindestens die doppelte Menge, kamen dort immer sehr gut an. Die Geschmackszutaten (Röstzwiebeln, Schinken, Käse) sind variabel, auf den Käse würde ich aber nicht verzichten!</br>Beim Backen muss man hin und wieder gucken, sie werden je nach Herd von unten auch sehr schnell dunkel, aber zu hell sollten sie auch nicht sein. Vorsicht, wenn sie noch warm sind, werden sie gerne stibitzt.',
  images: [
    'https://img.chefkoch-cdn.de/rezepte/1247411229689036/bilder/1234466/crop-360x240/pizza-baellchen.jpg'
  ],
  image: 'https://img.chefkoch-cdn.de/rezepte/1247411229689036/bilder/1234466/crop-360x240/pizza-baellchen.jpg',
  id: '00000-00002-fef'
};

export const Recipes: RecipesNode =


  {
    id: '00000',
    title: 'root',
    children: [
      {
        id: '00000-00001',
        title: 'Kochen',
        children: [
          {
            id: '00000-00001-00001',
            title: 'Suppen',
            children: [

            ]
          },
          {
            id: '00000-00001-00002',
            title: 'Eintöpfe',
            children: [

            ]
          },
        ]
      },
      {
        id: '00000-00002',
        title: 'Backen',
        children: [
          recipe

        ]
      },
      {
        id: '00000-00003',
        title: 'Trinken',
        children: [

        ]
      }
    ]
  }

;
