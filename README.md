# Ship API front

Jquery plugin to display search results from [Ship API](https://github.com/hkurhinen/ship-api)

This plugin requires jquery to work and with the bootstrap theme (default), also the bootstrap is required.

You can create your own themes by recreating the templates found from the themes folder.

Check out the live [demo](http://laiva-api.pw/examples/)

## Usage

Include theme (min.) js and (min.) css files from themes/{theme_name}/dist folder and include core js from dist folder.

```javascript
    $('#ship-search').shipApi({
      url: 'url of Ship API', // Optional, default value: 'https://api.laiva-api.pw/v1'
      size: 10, //How many search results is displayed per page, Optional, default value: 10
      onShipSelect: function(ship, html) {  //Function which is called after user click search result
        var dialog = bootbox.dialog({       //ship: ship object in json format, html: rendered ship object
          title: ship.name,
          message: html
        });
      }
    });
```
