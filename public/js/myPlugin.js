+function($) {
  'use strict';

  var dismiss = '[data-dismiss="alert"]';
  var Alert = function (el) {
    $(el).on('click',dismiss,this.close);
  }

  Alert.VERSION = '3.2.0';

  Alert.prototype.close = function (e) {
    var $this = $(this);
    var selector = $this.attr("data-target");

    if(!selector) {
      selector = $this.attr('href');
    }
  }
}(jQuery);