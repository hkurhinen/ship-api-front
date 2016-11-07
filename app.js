var fs = require('fs');
var pug = require('pug');

var clientTemplates = fs.readdirSync(__dirname + '/templates');
var compiledClientTemplates = [];
for (var i = 0; i < clientTemplates.length; i++) {
  var templateName = clientTemplates[i].replace('.pug', '');
  templateName = 'render'+templateName[0].toUpperCase() + templateName.substring(1);
  compiledClientTemplates.push(pug.compileFileClient(
    __dirname + '/templates/' + clientTemplates[i],
    { name: templateName}
  ));
}
fs.writeFileSync(__dirname + '/script/templates.js', compiledClientTemplates.join(''));