//changes everything to comic sans and random colors

function myFunction() {
   var body = DocumentApp.getActiveDocument().getBody();

 // Use editAsText to obtain a single text element containing
 // all the characters in the document.
 var text = body.editAsText();

  text.setFontFamily('Comic Sans MS');
  for(var i =0;i<text.getText().length-1;i++){
    text.setForegroundColor(i, i+1, getRandomColor());
        text.setBackgroundColor(i, i+1, getRandomColor());
  }
}

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
