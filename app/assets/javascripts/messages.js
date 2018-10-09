$(function(){
  function buildHTML (message) {
    var message_image = '';
    if (message.image){
      message_image = `<img src="${message.image}">`;
    }
    var html = `  <div class = "message" data-message_id="${message.id}">
                    <div class = "message-data">
                      <div class = "message-data__user-name">${message.user_name}</div>
                      <div class = "message-data__date">${message.created_at}</div>
                    </div>
                    <div class ="main-meesage">
                      <p class ="main-message__content">${message.content}</p>
                      <div>${message.image}</div>
                    </div>
                  </div>
               `
    return html;
  }

  $('form').on('submit',function (e) {
    e.preventDefault ();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function (data) {
      var html = buildHTML(data);
      $('.messages').append(html)
      $("form")[0].reset();
      $('html').animate({
        scrollTop: $('.messages').height()
      },500)
    })
    .fail(function(){
      alert('error');
    })
    return false;
  });

    function scrollend() {
        $('html').animate({
        scrollTop: $('.messages').height()
      },500)
    }
    function insertHTML(message) {
      var html = buildHTML(message);
      $('.messages').append(html);
    }

    var interval = setInterval(function() {
      var last_id = $('.message:last').data('message_id')
      if (window.location.href.match(/\/groups\/\d+\/messages/)) {

    $.ajax({
      url: location.href.json,
      data: {last_id: last_id },
      dataType: 'json'
    })
    .done(function(addmessages) {
      addmessages.forEach(function(message) {
        if (message.id > last_id ) {
          insertHTML(message)
        }
        scrollend();
      });
    })
    .fail(function(data) {
      alert('自動更新に失敗しました');
    });
    } else {
    clearInterval(interval);
   }}, 10000 );
});
