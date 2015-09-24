Template.datetimepicker.onRendered(function(){
  var $input = this.$('input').first();
  var defaults = DatetimePicker.defaults;
  if (this.data.configuration != null){
    if (DatetimePicker.configurations[this.data.configuration] == null){
      Log.warn('Unknown DatetimePicker configuration: ' + this.data.configuration);
    } else {
      defaults = DatetimePicker.configurations[this.data.configuration];
    }
  }

  var opts = _.extend({}, defaults, _.omit(this.data || {}, 'configuration'));
  $input.datetimepicker(opts);
});
