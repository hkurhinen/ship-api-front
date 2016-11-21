(function ($) {
  'use strict';

  $.fn.shipApi = function (options) {
    var settings = $.extend({
      url: 'https://api.laiva-api.pw/v1',
    }, options);

    $(this).html(renderShipApiSearchControls());

    var element = $(this);

    element.on('ship-select', function (event, ship, html) {
      if (typeof (settings.onShipSelect) == 'function') {
        settings.onShipSelect(ship, html);
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

    var searchButton = $(this).find('.main-search-btn');
    if (searchButton.length < 1) {
      throw new Error('Search button missing, is your theme ok?');
    }

    searchButton.click(function () {
      var query = searchInput.val();
      $.getJSON(settings.url + '/ships?q=' + query, function (res) {
        var ships = [];
        for (var i = 0; i < res.hits.hits.length; i++) {
          var hit = res.hits.hits[i];
          hit._source._id = hit._id;
          ships.push(hit._source);
        }
        searchResultContainer.html(renderShipApiSearchresults({ ships: ships }));
        searchResultContainer.find('.searchresult').click(function () {
          var shipId = $(this).attr('data-ship-id');
          var shipName = $(this).attr('data-ship-name');
          $.getJSON(settings.url + '/ships/' + shipId, function (ship) {
            element.trigger('ship-select', [ship, renderShipApiDetailModal({ ship: ship })]);
          });
        });
      });
    });

    searchInput.keyup(function (event) {
      if (event.keyCode == 13) {
        searchButton.click();
      }
    });

  };

})(jQuery);