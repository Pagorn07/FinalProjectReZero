/**
 * @file
 * Provides vertical tabs summaries for flag per node.
 *
 * This script summarizes the form values and displays them on the tabs.
 */

(function ($) {

  "use strict";

  Drupal.behaviors.flagPerNodeFieldsetSummaries = {
    attach: function (context) {
      $('fieldset.flag-per-node-form', context).drupalSetSummary(function (context) {
        if ($('.form-item-flag-per-node-default input', context).is(':checked')) {
          return Drupal.t('Using defaults');
        }
        else {
          var flag = '';
          var unflag = '';

          flag += $('.form-item-flag-per-node-flag input:checked').map(function () {
            return this.value;
          }).get().join(", ");

          if (flag) {
            flag = Drupal.t('Flag') + ': ' + Drupal.checkPlain(flag);
          }

          unflag += $('.form-item-flag-per-node-unflag input:checked').map(function () {
            return this.value;
          }).get().join(", ");

          if (unflag) {
            unflag = Drupal.t('Unflag') + ': ' + Drupal.checkPlain(unflag);
          }

          return [flag, unflag].join("<br />");
        }
      });
    }
  };

})(jQuery);
