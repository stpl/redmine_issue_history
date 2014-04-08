$(document).ready(function(){

  show_only_comments();

  function show_only_comments() {
    $('a#tab-history-comments').addClass('selected');
    $('a#tab-history-all').removeClass('selected');
    $('.journal.has-notes.has-details .details, .journal.has-details').hide();
    $('.journal.has-notes').show();
  }

  function show_history() {
    $('a#tab-history-comments').removeClass('selected');
    $('a#tab-history-all').addClass('selected');
    $('.journal.has-notes.has-details .details,.journal.has-notes.has-details, .journal.has-details, .journal').show();
  }

  $('a#tab-history-all').bind("click",function(e){
    show_history();
  });

  $('a#tab-history-comments').bind("click",function(e){
    show_only_comments();
  });

});
