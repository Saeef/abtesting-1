(function ($, Drupal)
  var basePath = Drupal.settings.basePath;
  var userGroup = Drupal.settings.userGroup;


   //set a cookie to track where he belongs
   $.cookie('userGroup', Drupal.settings.userGroup)

  $('<link>')
    .appendTo('head')
    .attr({type : 'text/css', rel : 'stylesheet'})
    .attr('href', basePath+'/css/abtesting-'+userGroup+'.css');
)(jQuery, Drupal);
