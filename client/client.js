'use strict';

const app = new Vue({
  el: '#app',
  data: {
    header: 'Header goes here!',
    title: 'Title goes here!',
    body: 'Body goes here!',
  },
});

$('#form').submit(function(event) {
  event.preventDefault();

  const $form = $('#form');


  const posting = $.post('/', $form.serialize());

  posting.done(function(data) {
    app.header = data.header;
    app.title = data.title;
    app.body = data.body;
    document.title = data.title;
  });
});
