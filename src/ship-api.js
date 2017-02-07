(function ($) {
  'use strict';

  $.fn.shipApi = function (options) {
    var settings = $.extend({
      url: 'https://api.laivadata.fi/v1',
      size: 10
    }, options);

    $(this).html(renderShipApiSearchControls());

    var offset = 0;
    var total = 0;
    var query = '';
    var contentLoading = false;

    var element = $(this);

    if (settings.prevSearches) {
      $(this).find('.ship-api-previous-searches').append(settings.prevSearches);
    }

    $(window).scroll(function () {
      if ($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
        if (!contentLoading && total > 0 && offset < total) {
          contentLoading = true;
          offset += settings.size;
          search();
        }
      }
    });

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

    searchResultContainer.on('click', '.searchresult', function () {
      var shipId = $(this).attr('data-ship-id');
      var shipName = $(this).attr('data-ship-name');
      var buildNumber = $(this).attr('data-ship-buildnumber');
      if (buildNumber) {
        $.getJSON(settings.url + '/attachments?buildnumber=' + buildNumber, function (attachments) {
          $.getJSON(settings.url + '/ships/' + shipId, function (ship) {
            ship.attachments = attachments;
            element.trigger('ship-select', [ship, renderShipApiDetailModal({ ship: ship, apiurl: settings.url })]);
          });
        });
      } else {
        $.getJSON(settings.url + '/ships/' + shipId, function (ship) {
          element.trigger('ship-select', [ship, renderShipApiDetailModal({ ship: ship, apiurl: settings.url })]);
        });
      }
    });

    var search = function () {
      if (offset == 0) {
        element.trigger('before-search', { query: query, offset: offset, size: settings.size });
      }
      loadContainer.show();
      $.getJSON(settings.url + '/ships?q=' + query + '&from=' + offset + '&size=' + settings.size, function (res) {
        total = res.hits.total;
        var ships = [];
        for (var i = 0; i < res.hits.hits.length; i++) {
          var hit = res.hits.hits[i];
          hit._source._id = hit._id;
          ships.push(hit._source);
        }

        if (offset == 0) {
          searchResultContainer.html(renderShipApiSearchresults({
            ships: ships,
            offset: offset,
            size: settings.size,
            total: total
          }));
          element.trigger('after-search', { query: query, offset: offset, size: settings.size });
        } else {
          searchResultContainer.find('tbody').append(renderShipApiSearchresultRows({
            ships: ships,
            offset: offset,
            size: settings.size,
            total: total
          }));
        }

        loadContainer.hide();
        contentLoading = false;
      });

    }

    element.on('find-ships', function (event, query) {
      searchInput.val(query);
      searchButton.click();
    });

    element.on('set-prev-searches', function (event, data) {
      element.find('.ship-api-previous-searches').empty();
      element.find('.ship-api-previous-searches').append(data);
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