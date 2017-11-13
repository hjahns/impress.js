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

            var sub = $(subSelector, activeStep);
            sub.sort(function sort_li(a, b) {
                return ($(b).data('position')) < ($(a).data('position'));
            });

            // if there are still subSteps to display, we don't go to next step
            if (sub.length > 0) {
              var element = sub.first(),
                  class = element.data("show-class");

              if (typeof class === 'undefined') {
                class = settings.shownClass
              }

              element.removeClass(settings.hiddenClass);
              element.addClass(class);

              return false;
            } else {
              return impress.goto( next );
            }
          };
        }
    };
  };

}( jQuery ));
