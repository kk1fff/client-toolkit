var inv;
var list = [
  "15719324",
  "11661657",
  "64718986",
  "49313179",
  "29736314",
  "843",
  "927"
];

function check(txt) {
  if (txt.length == 0) return;
  for (var i = 0; i < list.length; i++) {
    var target = list[i];
    if (target.match(new RegExp(txt + '$'))) {
      document.body.style.backgroundColor = "green";
      return;
    }
  }
  document.body.style.backgroundColor = "red";
}

function invKeyPress(e) {
  document.body.style.backgroundColor = "white";
  if (e.keyCode == 13) {
    check(inv.value);
    inv.value = "";
    e.preventDefault();
  }
}

window.addEventListener('load', function(e) {
  inv = document.getElementById('inv');
  inv.addEventListener('keypress', invKeyPress);
});
