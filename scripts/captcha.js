

var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

//Default numbers displayed.
var numb = [1,2,3,4];

//Grabs a number 1-10 randomly to display.
function num() {
    numb[0] = Math.floor(Math.random()*10);
    numb[1] = Math.floor(Math.random()*10);
    numb[2] = Math.floor(Math.random()*10);
    numb[3] = Math.floor(Math.random()*10);
};

//The amount of space each number needs on the canvas.
var sets = [30,90,140,200];

//sts = "side to side."  It's where the numbers are on the horizontal axis.
function sts() {
  sets[0] = Math.random() * (30 - 10) + 10;
  sets[1] = Math.random() * (90 - 50) + 50;
  sets[2] = Math.random() * (140 - 100) + 100;
  sets[3] = Math.random() * (200 - 150) + 150;
};


//sts = "side to side."  It's where the numbers are on the horizontal axis.


//Default for where the numbers are on a vertical axis.
var hei = [95,95,95,95];

function height() {
  hei[0] = Math.random() * (95 - 30) + 30;
  hei[1] = Math.random() * (95 - 30) + 30;
  hei[2] = Math.random() * (95 - 30) + 30;
  hei[3] = Math.random() * (95 - 30) + 30;
};

//The final step, calculates all number positions and displays them correctly.
function captcha() {
  ctx.font = " italic 40px Arial";
  ctx.fillStyle = "#7491A8";
  ctx.fillText(numb[0],sets[0],hei[0]);
  ctx.fillText(numb[1],sets[1],hei[1]);
  ctx.fillText(numb[2],sets[2],hei[2]);
  ctx.fillText(numb[3],sets[3],hei[3]);
};



//This is the function that's called on load and displays the numbers the first time.  This is also used for the refresh button.
function resetCanvas() { 
num();
height();
sts();
captcha();
//design();
};

resetCanvas();

//Gets rid of everything on the canvas.
function clear() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  $("#input").val("");
};

//Refresh button
$("#refresh").click(function() {
  clear();
  resetCanvas();
})


//This checks if the numbers that were entered into the form are correct and displays the correct message.  If correct, the canvas is automatically refreshed.
$("#submit").click(function() {
  var numcheck = Number($("#input").serialize().replace("input=",''));
  if(numcheck === (numb[0]*1000)+(numb[1]*100)+(numb[2]*10)+(numb[3])) {
    $("#test").text("You are correct!");


    return true;


    setTimeout(function() {$("#test").text(""); clear(); resetCanvas();}, 2000);
  } else {
    // $("#test").text("You are incorrect!");
    setTimeout(function() {$("#test").text("")}, 2000);

alert("Incorrect captcha code. Please try again.")
// returnToPreviousPage();

  clear();
  resetCanvas();
    return false;


  };
});


