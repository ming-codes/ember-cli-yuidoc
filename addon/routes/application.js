import Ember from 'ember';

export default Ember.Route.extend({
  ajax: Ember.inject.service(),

  //model() {
  //  let parser = new DOMParser();

  //  return this.get('ajax')
  //    .request('/docs/index.html', { dataType: 'html' })
  //    .then(results => {
  //      let doc = Ember.$(parser.parseFromString(results, 'text/html'));
  //      let css = doc.find('head link[rel="stylesheet"]')
  //        .map(function(index, element) {
  //          let jq = Ember.$(element);
  //          let href = jq.attr('href');

  //          if (!href.match(/^(https?:)?\/\//)) {
  //            jq.attr('href', href.replace(/^(\.\/)?/, '/docs/'));
  //          }

  //          return element;
  //        });

  //      Ember.$(document.head).append(css);

  //      return doc.find('body #main-wrapper').get(0);
  //    });
  //}
});
