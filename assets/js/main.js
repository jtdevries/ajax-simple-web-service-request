

$(document).on("keydown", function(event) {
  if (event.keyCode == 13)
  //create XHR object
  var xhr = new XMLHttpRequest();
  //open - type, url/file, async
  xhr.open('GET', 'https://thatsthespir.it/api', true);
  xhr.onload = function() {
    if(this.status == 200) {
      var api = JSON.parse(this.responseText);
      var photo = api.photo;
      console.log(api);
      $('img').attr('src', photo);
      $('h3').text('" '+ api.quote +' "');
      $('p').text('~ '+ api.author);
    }
  }
  xhr.send();
});
