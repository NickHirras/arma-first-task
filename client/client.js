var app = new Vue({
  el: '#app', 
  data: {
    header: 'Header goes here!',
    title: 'Title goes here!',
    body: 'Body goes here!'
  }
});

$("#form").submit(function(event) {
  
  event.preventDefault();
  
  var $form = $(this);
  var title = $form.find("input[name='title']");
  var header = $form.find("input[name='header']");
  var body = $form.find("textarea[name='body']");

  var posting = $.post("/", $form.serialize());
  posting.done(function(data) {
    app.header = data.header;
    app.title = data.title;
    app.body = data.body;
    document.title = data.title;
  });
});


