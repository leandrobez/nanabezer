const gulp = require('gulp');

var ClientCssOrigin = './src/sass/';
var ClientJSOrigin = './src/js/';
var ClientHtmlOrigin = './src/';
var PathDest = './dist/';

/* Cópia de arquivos css */

gulp.task('copyStyles', () => {
  var CssOrigin = ClientCssOrigin + 'styles.css';
  var CssDest = PathDest + 'css/';

  gulp.src(CssOrigin).pipe(gulp.dest(CssDest));
});

gulp.task('copyScript', () => {
  var JsOrigin = ClientJSOrigin + '*.js';
  var JsDest = PathDest + 'js';

  gulp.src(JsOrigin).pipe(gulp.dest(JsDest));
});

/* Cópia do arquivo index.html */
gulp.task('copyHtml', () => {
  var HtmlOrigin = ClientHtmlOrigin + '*.html';
  var HtmlDest = PathDest;

  gulp.src(HtmlOrigin).pipe(gulp.dest(HtmlDest));
});

gulp.task('default', ['copyStyles', 'copyScript', 'copyHtml'], () => {
  // watch for CSS changes
  var CssOrigin = ClientCssOrigin + 'styles.css';
  var watcher = gulp.watch(CssOrigin, () => {
    // run styles upon changes
    gulp.run('copyStyles');
  });
  watcher.on('change', event => {
    console.log(
      '***** Arquivo ' + event.path + ' substituído em ' + event.type + ' *****'
    );
  });

  var JSOrigin = ClientJSOrigin + '*.js';
  var watcher = gulp.watch(JSOrigin, () => {
    // run styles upon changes
    gulp.run('copyScript');
  });
  watcher.on('change', event => {
    console.log(
      '***** Arquivo ' + event.path + ' substituído em ' + event.type + ' *****'
    );
  });

  var HtmlOrigin = ClientHtmlOrigin + '*.html';
  var watcher = gulp.watch(HtmlOrigin, () => {
    // run styles upon changes
    gulp.run('copyHtml');
  });
  watcher.on('change', event => {
    console.log(
      '***** Arquivo ' + event.path + ' substituído em ' + event.type + ' *****'
    );
  });
});
