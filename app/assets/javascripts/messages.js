$(function(){
  function buildHTML(message){
    var gazou = '';
    if (message.image.url){
      gazou = `<img src="${message.image.url}">`;
    }

    var html = `  <div class = "message">
                    <div class = "message-data">
                      <div class = "message-data__user-name">${message.user_name}</div>
                      <div class = "message-data__date">${message.created_at}</div>
                    </div>
                    <div class ="main-meesage">
                      <p class ="main-message__content">${message.content}</p>
                      <div>${gazou}</div>
                    </div>
                  </div>
               `
    return html;
  }
  $('form').on('submit',function(e){
    e.preventDefault();
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
    .done(function(data){
      var html = buildHTML(data);
      $('.messages').append(html)
      $('.form__message').val('')
      $('html').animate({
        scrollTop: $(document).height()
      },500)
    })
    .fail(function(){
      alert('error');
    })
    return false;
  });
});

