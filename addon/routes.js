import buildRoutes from 'ember-engines/routes';

export default buildRoutes(function() {
  // routes
  //
  // modules/form.html
  // classes/in-text-field.html
  // classes/ui-table.th.html#attr_frozen
  // classes/Confirmation.html#method_buildOptions
  // classes/Confirmation.html#property_isWarning
  this.route('modules');
  this.route('classes');
});
