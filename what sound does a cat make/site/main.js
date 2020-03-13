const $ = require("jquery");
const list = require("./dependencies/list.json");

function random() {
  var ran = [];
  while(ran.length < 3){
  var r = Math.floor(Math.random() * list.data.length);
    if(ran.indexOf(r) === -1){
      ran.push(r);
    }
  }
  var output = [[list.data[ran[0]][0], list.data[ran[0]][1]], [list.data[ran[1]][0], list.data[ran[1]][1]], [list.data[ran[2]][0], list.data[ran[2]][1]]];
  return output;
}

var rand = random();

window.onload = function () {
document.getElementById("cell1").innerHTML = rand[0][0];
document.getElementById("cell2").innerHTML = rand[0][1];
document.getElementById("cell3").innerHTML = rand[1][0];
document.getElementById("cell4").innerHTML = rand[1][1];
document.getElementById("cell5").innerHTML = rand[2][0];
document.getElementById("cell6").innerHTML = rand[2][1];
document.getElementById("flag").innerHTML = "?";
document.getElementById("hash").innerHTML = list.flag;
};
