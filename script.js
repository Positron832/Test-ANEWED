"strict mode"
  function stage1() {
    document.getElementById("screen").style.backgroundImage = "radial-gradient(circle, lightBlue, dodgerBlue)";
    document.getElementById("title").style.display = "none";
    document.getElementById("start").style.display = "none";
    document.getElementById("credit").style.display = "none";
    document.getElementById("stage1").style.display = "block";
    document.getElementById("buttonStage1").style.display = "block";
  }
  
  function stage2() {
    document.getElementById("stage1").style.display = "none";
    document.getElementById("buttonStage1").style.display = "none";
    document.getElementById("stage2").style.display = "block";
    document.getElementById("yes").style.display = "inline";
    document.getElementById("no").style.display = "inline";
  }
  
   function lost() {
    document.getElementById("stage2").innerHTML = "You lost the war and had to flee to France!";
    document.getElementById("yes").style.display = "none";
    document.getElementById("no").style.display = "none";
    document.getElementById("buttonStage2").style.display = "block";
  }
  
  function win() {
    document.getElementById("stage2").innerHTML = "You won the war and lived happily ever after!";
    document.getElementById("yes").style.display = "none";
    document.getElementById("no").style.display = "none";
    document.getElementById("screen").style.backgroundImage = "linear-gradient(20deg, red, lime, blue, yellow, green, purple)";
    document.getElementById("restart").style.display = "block";
  }
      
  function stage3() {
    document.getElementById("stage2").style.display = "none";
    document.getElementById("buttonStage2").style.display = "none";
    document.getElementById("stage3").style.display = "block";
    document.getElementById("buttonStage3").style.display = "block";
  }
  
  function hired() {
    document.getElementById("stage3").style.display = "none";
    document.getElementById("buttonStage3").style.display = "none";
    document.getElementById("hired").style.display = "block";
    document.getElementById("buttonKill").style.display = "block";
  }
  
  function kill() {
    document.getElementById("hired").style.display = "none";
    document.getElementById("buttonKill").style.display = "none";
    document.getElementById("stage4").style.display = "block";
    document.getElementById("buttonStage4").style.display = "block";
  }
  
   function attackGe() {
    document.getElementById("screen").style.backgroundImage = "radial-gradient(circle, red, darkBlue)";
    document.getElementById("stage4").style.display = "none";↩
    document.getElementById("buttonStage4").style.display = "none";
    document.getElementById("stage5").style.display = "block";
    document.getElementById("buttonStage5").style.display = "block";
  }
  
  function attackPo() {
    document.getElementById("stage5").style.display = "none";
    document.getElementById("buttonStage5").style.display = "none";
    document.getElementById("stage6").style.display = "block";
    document.getElementById("buttonStage6").style.display = "block";
  }
  
  function attackSe() {
    document.getElementById("stage6").style.display = "none";
    document.getElementById("buttonStage6").style.display = "none";
    document.getElementById("stage7").style.display = "block";
    document.getElementById("retreat").style.display = "block";
    document.getElementById("attackRu").style.display = "block";
  }
  
  function retreat() {
    document.getElementById("retreat").style.display = "none";
    document.getElementById("attackRu").style.display = "none";
    document.getElementById("stage7").style.display = "none";
    document.getElementById("leaveSe").style.display = "block";
    document.getElementById("restart").style.display = "block";
    document.getElementById("screen").style.backgroundImage = "linear-gradient(orange, darkRed)";
  }
  
  function attackRu() {
    document.getElementById("retreat").style.display = "none";
    document.getElementById("attackRu").style.display = "none";
    document.getElementById("stage7").style.display = "none";
    document.getElementById("nuke").style.display = "block";
    document.getElementById("buttonNuke").style.display = "block";
  }
  
  function nuke() {
    document.getElementById("nuke").style.display = "none";
    document.getElementById("buttonNuke").style.display ="none";
    document.getElementById("nukeUs").style.display = "block";
    document.getElementById("buttonNukeUs").style.display = "block";
    document.getElementById("screen").style.backgroundImage = "radial-gradient(circle, darkRed, darkSlateGrey)";
    document.getElementById("screen").style.color = "white";
    document.getElementById("screen").style.textShadow = "0px 0px 7px white";
  }
  
  function nukeUs() {
    document.getElementById("nukeUs").style.display = "none";
    document.getElementById("buttonNukeUs").style.display = "none";
    document.getElementById("victory").style.display = "block";
    document.getElementById("restart").style.display = "block";
    document.getElementById("restart").style.backgroundImage = "linear-gradient(orange, red)";
    document.getElementById("restart").style.color = "white";
    document.getElementById("restart").style.textShadow = "0px 0px 7px white";
  }
  
  function restart() {↩
    document.getElementById("screen").style.backgroundImage = "linear-gradient(deepSkyBlue, dodgerBlue, blue, green)";
    document.getElementById("screen").style.color = "black";
    document.getElementById("screen").style.textShadow = "0px 0px";
    document.getElementById("victory").style.display = "none";
    document.getElementById("restart").style.display = "none";
    document.getElementById("restart").style.backgroundImage = "linear-gradient(lightGrey, grey)";
    document.getElementById("restart").style.color = "black";
    document.getElementById("restart").style.textShadow = "0px 0px";
    document.getElementById("stage2").style.display = "none";
    document.getElementById("stage2").innerHTML = "Win the war?";
    document.getElementById("leaveSe").style.display = "none";
    document.getElementById("retreat").style.display = "none";
    document.getElementById("start").style.display = "block";
    document.getElementById("title").style.display = "block";
    document.getElementById("credit").style.display = "inline";
  }
