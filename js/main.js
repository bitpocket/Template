function clickMe() {
  var res = _.map([[1, 2], [3, 4]], _.first);

  $('#content').html('<p>new content is ' + res + '</p>');
}
