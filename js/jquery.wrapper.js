(function ( $ ) {
  $.fn.impress = function( options ) {

      var settings = $.extend({
          stepClass: 'step',
          subStepClass: 'sub' ,
          hiddenClass: 'hidden',
          shownClass: 'zoomIn animated', // animate.css class
      }, options );

      var impressWrapper = new ImpressWrapper();
      var impress = impressWrapper.create();
      impress.init(this.id);

      function ImpressWrapper() {
        var self = this;
        var impress = null;

        this.create = function() {
          // impress init from window, since wrapped
          impress = window.impress();
          self.overwriteNext();

          return impress;
        }

        this.overwriteNext = function() {
          // select all steps and overwrite next function so it only triggers
          // if no hidden sub steps are left
          var steps = $('.'+ settings.stepClass);

          impress.next = function() {
            var activeStep = $('.' +  settings.stepClass + '.active');

            var next = steps.index( activeStep ) + 1;
            next = next < steps.length ? steps[ next ] : steps[ 0 ];

            // select all subSteps, which are not displayed yet
            var subSelector = '.' + settings.subStepClass +
                              '.' + settings.hiddenClass;

            var sub = $('.' + settings.subStepClass, activeStep);
            var subActive = $(subSelector, activeStep);

            subActive.sort(function sort_li(a, b) {
                return ($(a).data('position')) - ($(b).data('position'));
            });

            // if there are still subSteps to display, we don't go to next step
            if (subActive.length > 0) {
              var element = subActive.first();
              var showClass = element.data("show-class");
              var customFunc = element.data("func");

              if (typeof showClass === 'undefined') {
                showClass = settings.shownClass
              }

              if (typeof customFunc === 'undefined') {
                element.removeClass(settings.hiddenClass);
                element.addClass(showClass);
              } else {
                window[customFunc](sub);
                element.removeClass(settings.hiddenClass);
                element.addClass(showClass);
              }

              return false;
            } else {
              return impress.goto( next );
            }
          };
        }
    };
  };

}( jQuery ));

var i = 0;
function myFunc(sub){
   setTimeout(function () {
      if (i < sub.length) {
         sub.eq(i).css("color", "red");
         i++;
         myFunc(sub);
      }
   }, 200)
}
