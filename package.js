Package.describe({
  name: '3stack:blaze-datetimepicker',
  version: '4.14.30_5',
  summary: 'A simple template helper for {{#datetimepicker}}',
  git: 'https://github.com/3stack-software/meteor-blaze-datetimepicker',
  documentation: 'README.md'
});

Package.onUse(function(api){
  api.versionsFrom('METEOR@1.1.0.2');
  api.export('DatetimePicker', 'client');
  api.use([
    'blaze',
    'templating',
    'spacebars',
    'logging',
    'tsega:bootstrap3-datetimepicker@4.7.14_4'
  ], 'client');
  api.addFiles([
    'datetimepicker.html',
    'datetimepicker.js'
  ], 'client');
});
