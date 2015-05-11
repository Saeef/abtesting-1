(function ($, Drupal)
  var basePath = Drupal.settings.basePath;


  function getRandomInteger(max) {
    return Math.floor(Math.random() * max) + 1;
  }

  // Set here variables that need to be passed to javascript.
  // A random number 1-10, users < 6, group-a, users >= 6, group-b.
  $random = getRandomInteger(10);

  if ($random < 6) {
    // User belong to group A
     var userGroup = 'a';
  } else {
    var userGroup = 'b';
  }

    /**
     * Set a cookie to track where user belongs.
     * It expires in 7 days.
     * jquery.cookie is included in Drupal.
     */
  if ( $.cookie('userGroup') === null) {
   var cookieSet = $.cookie('userGroup', userGroup, { expires: 7, path: '/' });

  // Add the a or b stylesheet.
  $('<link>')
    .appendTo('head')
    .attr({type : 'text/css', rel : 'stylesheet'})
    .attr('href', basePath+'/css/abtesting-'+userGroup+'.css');
  }

)(jQuery, Drupal);

