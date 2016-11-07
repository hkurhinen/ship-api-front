(function () {
  'use strict';

  $('#main-search-btn').click(function () {
    var query = $('#main-search-input').val();
    $.getJSON('https://api.laiva-api.pw/v1/ships?q=' + query, function (res) {
      var ships = [];
      for (var i = 0; i < res.hits.hits.length; i++) {
        var hit = res.hits.hits[i];
        hit._source._id = hit._id;
        ships.push(hit._source);
      }
      console.log(ships);
      $('.main-search-results').html(renderSearchresults({ ships: ships }));
    });
  });

  $(document).on('click', '.searchresult', function () {
    var shipId = $(this).attr('data-ship-id');
    var shipName = $(this).attr('data-ship-name');
    var dialog = bootbox.dialog({
      title: shipName,
      message: '<p><i class="fa fa-spin fa-spinner"></i> Ladataan...</p>'
    });
    dialog.init(function () {
      $.getJSON('https://api.laiva-api.pw/v1/ships/' + shipId, function (ship) {
        dialog.find('.bootbox-body').html(renderDetailModal({ ship: ship }));
      });
    });

  });

})();