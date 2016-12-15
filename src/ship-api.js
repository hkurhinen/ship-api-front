(function ($) {
  'use strict';

  $.fn.shipApi = function (options) {
    var settings = $.extend({
      url: 'https://api.laiva-api.pw/v1',
      size: 10
    }, options);

    $(this).html(renderShipApiSearchControls());

    var offset = 0;
    var total = 0;
    var query = '';

    var element = $(this);

    element.on('ship-select', function (event, ship, html) {
      if (typeof (settings.onShipSelect) == 'function') {
        settings.onShipSelect(ship, html);
      }
    });

    element.on('before-search', function (event, data) {
      if (typeof (settings.beforeSearch) == 'function') {
        settings.beforeSearch(data);
      }
    });

    element.on('after-search', function (event, data) {
      if (typeof (settings.afterSearch) == 'function') {
        settings.afterSearch(data);
      }
    });

    var searchInput = $(this).find('.main-search-input');
    if (searchInput.length < 1) {
      throw new Error('Search input field missing, is your theme ok?');
    }

    var searchResultContainer = $(this).find('.main-search-results');
    if (searchResultContainer.length < 1) {
      throw new Error('Search results container missing, is your theme ok?');
    }

    var loadContainer = $(this).find('.ship-api-load-container');
    if (loadContainer.length < 1) {
      throw new Error('Load container missing, is your theme ok?');
    }

    var searchButton = $(this).find('.main-search-btn');
    if (searchButton.length < 1) {
      throw new Error('Search button missing, is your theme ok?');
    }

    var search = function() {
      element.trigger('before-search', {query: query, offset: offset, size: settings.size});
      searchResultContainer.hide();
      loadContainer.show();
      $.getJSON(settings.url + '/ships?q=' + query + '&from=' + offset + '&size=' + settings.size, function (res) {
        total = res.hits.total;
        var ships = [];
        for (var i = 0; i < res.hits.hits.length; i++) {
          var hit = res.hits.hits[i];
          hit._source._id = hit._id;
          ships.push(hit._source);
        }
        
        searchResultContainer.html(renderShipApiSearchresults({
          ships: ships,
          offset: offset,
          size: settings.size,
          total: total
        }));

        loadContainer.hide();
        searchResultContainer.show();
        
        searchResultContainer.find('.prev-page').click(function () {
          offset -= settings.size;
          search();
        });
        
        searchResultContainer.find('.next-page').click(function () {
          offset += settings.size;
          search();
        });
        
        searchResultContainer.find('.goto-page').click(function () {
          offset = parseInt($(this).attr('data-offset'), 10);
          search();
        });

        searchResultContainer.find('.searchresult').click(function () {
          var shipId = $(this).attr('data-ship-id');
          var shipName = $(this).attr('data-ship-name');
          $.getJSON(settings.url + '/ships/' + shipId, function (ship) {
            element.trigger('ship-select', [ship, renderShipApiDetailModal({ ship: ship })]);
          });
        });
      });

      element.trigger('after-search', {query: query, offset: offset, size: settings.size});
    }

    element.on('find-ships', function(event, query) {
      searchInput.val(query);
      searchButton.click();
    });

    searchButton.click(function () {
      query = searchInput.val();
      offset = 0;
      search();
    });

    searchInput.keyup(function (event) {
      if (event.keyCode == 13) {
        searchButton.click();
      }
    });

  };

})(jQuery);