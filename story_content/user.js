function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6XpF6DB9HfW":
        Script1();
        break;
      case "6ZbXaWD4OE4":
        Script2();
        break;
      case "5wgbKKp9RiZ":
        Script3();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSongku');
audio.src="musikku.mp3";
audio.load();
audio.play();
audio.volume=0.2;
}

function Script2()
{
  var audio = document.getElementById('bgSongku');
audio.volume=0.2;
}

function Script3()
{
  var audio = document.getElementById('bgSongku');
audio.volume=0.0;
}

