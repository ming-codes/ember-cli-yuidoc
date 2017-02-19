'use strict';

var getVersion  = require('git-repo-version');
var fs          = require('fs');
var path        = require('path');
var Y           = require('yuidocjs');

module.exports = {
  load: function loadYuidocOptions(projectRoot){
    try {
      return JSON.parse(fs.readFileSync(path.join(projectRoot, 'yuidoc.json')));
    } catch(e){
      console.log("No yuidoc.json file in root folder. Run `ember g ember-cli-yuidoc` to generate one.");
      process.exit(1);
    }
  },

  generate: function generateYuidocOptions(config){
    var exclusions = [
      '.DS_Store',
      '.git',
      'node_modules',
      'vendor',
      'bower_components',
      'tmp',
      'tests'
    ];

    if (!config) {
      config = this.load();
    }

    config.version = getVersion();
    config.options.outdir = config.options.outdir || 'docs';

    var confExclusions = config.options.exclude;
    if(confExclusions && typeof confExclusions === 'string') {
      confExclusions = confExclusions.split(',');
      confExclusions.forEach(function(e) {
        e = e.trim();
        if(e !== '' && exclusions.indexOf(e) === -1) {
          exclusions.push(e);
        }
      });
    }
    config.options.exclude = exclusions.join(',');

    return Y.Project.init(config);
  }
}
