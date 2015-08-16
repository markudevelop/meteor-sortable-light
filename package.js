Package.describe({
  name: 'voidale:sortable-light',
  version: '1.2.1',
  summary: 'Sortable without the extra meteor functions from rubaxa:sortable',
  git: 'https://github.com/voidale/meteor-sortable-light.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('0.9.0');
  api.addFiles('lib/Sortable.js', 'client');
  api.export('Sortable', 'client');
});