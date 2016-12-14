/*global module:false*/

var fs = require('fs');
var pug = require('pug');

module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.registerMultiTask('compile-template', 'Compiles pug templates', function () {
    var clientTemplates = fs.readdirSync(this.data.sourceFolder);
    var compiledClientTemplates = [];
    for (var i = 0; i < clientTemplates.length; i++) {
      var templateName = clientTemplates[i].replace('.pug', '');
      templateName = 'renderShipApi' + templateName[0].toUpperCase() + templateName.substring(1);
      compiledClientTemplates.push(pug.compileFileClient(
        this.data.sourceFolder + clientTemplates[i],
        { name: templateName, compileDebug: false }
      ));
    }
    fs.writeFileSync(this.data.destFile, compiledClientTemplates.join(''));
  });

  grunt.initConfig({
    'compile-template': {
      'compile-bootstrap-template': {
        'sourceFolder': __dirname + '/themes/ship-api-bootstrap/templates/',
        'destFile': __dirname + '/themes/ship-api-bootstrap/dist/ship-api-bootstrap-theme.js',
      }
    },
    'cssmin': {
      'minify-bootstrap-css': {
        files: [{
          expand: true,
          cwd: 'themes/ship-api-bootstrap/style',
          src: ['*.css', '!*.min.css'],
          dest: 'themes/ship-api-bootstrap/dist',
          ext: '.min.css'
        }]
      }
    },
    uglify: {
      'uglify-bootstrap-theme': {
        files: {
          'themes/ship-api-bootstrap/dist/ship-api-bootstrap-theme.min.js': ['themes/ship-api-bootstrap/dist/ship-api-bootstrap-theme.js']
        }
      },
      'uglify-source': {
        files: {
          'dist/ship-api.min.js': ['src/ship-api.js']
        }
      }
    }
  });

  grunt.registerTask('default', ['compile-template:compile-bootstrap-template', 'cssmin:minify-bootstrap-css', 'uglify:uglify-bootstrap-theme', 'uglify:uglify-source']);
};