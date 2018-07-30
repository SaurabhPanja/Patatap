
    var circles = [];


    function onKeyDown(event) {
  	// When a key is pressed, set the content of the text item:

    // var x = Math.floor(Math.random()*canvas.width);
    // var y = Math.floor(Math.random()*canvas.height);
    sound.play();
    var maxPoint = new Point(view.size.width,view.size.height);
    var randomPoint = Point.random();
    var point = randomPoint * maxPoint;
    var myCircle = new Path.Circle(point,500);
    myCircle.fillColor = 'red';
    circles.push(myCircle);
    console.log(circles);

  }

  function onFrame(event) {

    for (var i = 0; i < circles.length; i++) {
      circles[i].fillColor.hue +=1;
      circles[i].scale(0.9);
    }
    }
