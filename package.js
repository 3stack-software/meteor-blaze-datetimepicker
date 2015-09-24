Package.describe({
  name: '3stack:blaze-datetimepicker',
  version: '4.14.30_7',
  summary: 'A simple template helper for {{#datetimepicker}}',
  git: 'https://github.com/3stack-software/meteor-blaze-datetimepicker',
  documentation: 'README.md'
});

Package.onUse(function(api){
  api.versionsFrom('METEOR@1.1.0.2');
  api.imply('3stack:datetimepicker-common@4.14.30');
  api.use([
    'blaze',
    'templating',
    'spacebars',
    'logging',
    'tsega:bootstrap3-datetimepicker@4.14.30_4',
    '3stack:datetimepicker-common@4.14.30'
  ], 'client');
  api.addFiles([
    'datetimepicker.html',
    'datetimepicker.js'
  ], 'client');
});
