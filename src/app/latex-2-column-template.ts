export const twoColTemplate = {
  frame: '\\documentclass[12pt]{book}\n' +
    '\\usepackage[utf8]{inputenc}\n' +
    '\\usepackage[top=1.5cm, bottom=1.5cm, left=1cm, right=1cm]{geometry}\n' +
    '\\usepackage{multicol}\n' +
    '\\setlength{\\columnsep}{1cm}\n' +
    '\\usepackage{graphicx}\n' +
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

    '\n' +
    '\t\t{{content}}\n' +
    '\n' +

    '\\end{document}',

  recipe:
   // 'RECIPE RECIPE RECIPE RECIPE RECIPE RECIPE RECIPE RECIPE RECIPE' +
    '\\begin{mytextbox}\n' +
    '  \\ThisCenterWallPaper{1.2}{{{bg-image}}}\n' +
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
    '\\end{mytextbox}',

  chapter:

    //'\\newpage\n' +
 //   '\t\\begin{multicols}{2}\n' +
 //   '\t\\end{multicols}\n' +
 //   'CHAPTER CHAPTER CHAPTER CHAPTER CHAPTER CHAPTER CHAPTER CHAPTER' +


    '  \\chapter{{{title}}}\n' +
    '  \\ThisCenterWallPaper{1.2}{{{bg-image}}}\n' +
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

    '  \\ThisCenterWallPaper{1.2}{{{bg-image}}}\n' +
    '  \\chapter{{{title}}}\n' +
    '\\begin{mytextbox}\n' +
    '{{text}}' +
    '\\end{mytextbox}\n' +
    '\\newpage\n' +

    '{{children}}'

};

