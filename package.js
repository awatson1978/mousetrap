Package.describe({
  summary: "Mousetrap packaged for Meteor",
  version: "1.0.0",
  git: "https://github.com/awatson1978/mousetrap.git"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.2.2');

  api.addFiles('mousetrap.min.js', 'client');
	api.addFiles('export-mousetrap.js', 'client');
	api.addFiles('plugins/global-bind/mousetrap-global-bind.js', 'client');

});

Package.onTest(function(api) {
  api.use('tinytest');
  api.addFiles('awatson1978:mousetrap-tests.js');
});
