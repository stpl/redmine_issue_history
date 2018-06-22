$(document).ready(function(){

  show_only_comments();

  function show_only_comments() {
    $('a#tab-history-comments').addClass('selected');
    $('a#tab-history-all').removeClass('selected');

    $('#history .journal.has-notes.has-details .details, ' +
      '#history .journal.has-details').addClass('hidden');
    $('#history .journal.has-notes').removeClass('hidden');

    mark_even_odd();
  }

  function show_history() {
    $('a#tab-history-comments').removeClass('selected');
    $('a#tab-history-all').addClass('selected');

    $('#history .journal.has-notes.has-details .details,' +
      '#history .journal.has-notes.has-details, ' +
      '#history .journal.has-details, ' +
      '#history .journal').removeClass('hidden');

    mark_even_odd();
  }

  function mark_even_odd() {
    $('#history .journal').removeClass('odd').removeClass('even');

    // Note that, confusingly, jQuery's filter pseudos are 0-indexed while CSS :nth-child() is 1-indexed
    $('#history .journal:visible:even').addClass('odd');
    $('#history .journal:visible:odd').addClass('even');
  }

  $('a#tab-history-all').bind("click",function(e){
    show_history();
  });

  $('a#tab-history-comments').bind("click",function(e){
    show_only_comments();
  });

});
