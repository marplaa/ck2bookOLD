
export const twoColTemplate = {
  chapterImageRes: '2480x3508',
  recipeImageRes: '800x600',
  recipeBgImageRes: '2480x3508',
  frame: '\\documentclass[12pt, a4paper]{book}\n' +
    '\\usepackage[utf8]{inputenc}\n' +
    '\\usepackage[top=1.5cm, bottom=1.5cm, left=1cm, right=1cm]{geometry}\n' +
    '\\usepackage{multicol}\n' +
    '\\setlength{\\columnsep}{1cm}\n' +
    '\\usepackage{graphicx}\n' +
    '\\usepackage{ulem}\n' +
    '\\usepackage{wrapfig}\n' +
    '\\usepackage{wallpaper}\n' +
    '\\usepackage[breakable]{tcolorbox}\n' +
    '\\graphicspath{{images/}} %Setting the graphicspath' +
    '\n' +
    '\n' +
    '\\newtcolorbox{mytextbox}[1][]{%\n' +
    '\tstandard jigsaw,\n' +
    '\tcolframe=red,\n' +
    '\topacityframe=0, \n' +
    '\topacityback=0.7,\n' +
    '\tbreakable\n' +
    '}\n' +
    '\n' +
    '\\begin{document}\n' +

    '\\tableofcontents{}' +

    '\n' +
    '\t\t{{content}}\n' +
    '\n' +

    '\\end{document}',

  recipe:
   // 'RECIPE RECIPE RECIPE RECIPE RECIPE RECIPE RECIPE RECIPE RECIPE' +
    '\\begin{mytextbox}\n' +

    '  \\section{{{title}}}\n' +

    '\n' +
    '\n' +
    '\n' +
    '  \\begin{center}\n' +
    '    \\includegraphics[width=7cm]{{{image}}}\n' +
    '  \\end{center}\n' +

    '\n' +
    '\n' +
    '  \\begin{center}\n' +
    '    {{ingredients}}\n' +
    '  \\end{center}\n' +
    '\n' +
    '  {{text}}\n' +
    '\n' +
    '\\end{mytextbox}' +
  '  \\ThisCenterWallPaper{1}{{{bg-image}}}\n',

  chapter:

    //'\\newpage\n' +
 //   '\t\\begin{multicols}{2}\n' +
 //   '\t\\end{multicols}\n' +
 //   'CHAPTER CHAPTER CHAPTER CHAPTER CHAPTER CHAPTER CHAPTER CHAPTER' +


    '  \\chapter{{{title}}}\n' +
    '  \\ThisCenterWallPaper{1}{{{bg-image}}}\n' +
    '\\begin{mytextbox}\n' +
    '{{text}}' +
    '\\end{mytextbox}\n' +
    '\\newpage\n' +
    '' +
    '' +
    '' +
    '\t\\begin{multicols}{2}\n' +
    '{{children}}' +
    '\t\\end{multicols}\n',

  chapter_w_subchapters:
    '\\newpage\n' +
   // 'CHAPTER CHAPTER CHAPTER CHAPTER CHAPTER CHAPTER CHAPTER CHAPTER' +


    '  \\chapter{{{title}}}\n' +
    '  \\ThisCenterWallPaper{1}{{{bg-image}}}\n' +
    '\\begin{mytextbox}\n' +
    '{{text}}' +
    '\\end{mytextbox}\n' +
    '\\newpage\n' +

    '{{children}}'

};

