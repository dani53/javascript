var body = document.querSelector("body");
//body.innerHTML = header  is the worst way to do this
var header = document.createElement('header');

header.innerHTML="<a href="
//or a more javascript way..
var aTag = document.createElement('a');
