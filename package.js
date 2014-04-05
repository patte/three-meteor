Package.describe({
    summary: "three.js packaged for use in Meteor."
});

Package.on_use(function (api) {
  api.add_files('lib/stats.min.js', 'client');
  api.add_files('lib/typedarray.js', 'client');
	api.add_files('lib/three.js', 'client');
});
