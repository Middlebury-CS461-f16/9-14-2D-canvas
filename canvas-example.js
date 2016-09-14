

var NUM_POINTS = 10000;
var SIZE = 2;

var immediateRender = function(){
  // get the drawing context
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext("2d");
    var width = canvas.width;
    var height = canvas.height;

    context.clearRect(0 , 0, width, height);
    // set the paint color
    context.fillStyle = "#000000";

    // pick three initial points
    var points = [[width/2,0], [0, height - 10], [height-10, height - 10]];

    // pick on of the three at random as a starting point
    var point = points[Math.floor(Math.random() * 3)];

    for (var i = 0; i < NUM_POINTS; i++){
        // pick one of the initial three points at random
        var randomPoint = points[Math.floor(Math.random() * 3)];
        // find the mid point between the random point and the last point drawn
        point = [(point[0] + randomPoint[0]) / 2, (point[1] + randomPoint[1]) / 2 ];

        // draw the new point
        context.fillRect(point[0], point[1],SIZE, SIZE);
    }
};

var data = [];
var retainedRender = function(){
  // get the drawing context
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext("2d");
    var width = canvas.width;
    var height = canvas.height;

    context.clearRect(0 , 0, width, height);
    // set the paint color
    context.fillStyle = "#000000";
    if (data.length === 0){
      // pick three initial points
      var points = [[width/2,0], [0, height - 10], [height-10, height - 10]];

      // pick on of the three at random as a starting point
      var point = points[Math.floor(Math.random() * 3)];

      for (var i = 0; i < NUM_POINTS; i++){
          // pick one of the initial three points at random
          var randomPoint = points[Math.floor(Math.random() * 3)];
          // find the mid point between the random point and the last point drawn
          point = [(point[0] + randomPoint[0]) / 2, (point[1] + randomPoint[1]) / 2 ];

          // draw the new point
          data.push(point);

      }
  }

  data.forEach(function(point){
    context.fillRect(point[0], point[1],SIZE, SIZE);
  });
};






window.onload = function(){
  var button = document.getElementById("renderButton");
  button.onclick = ()=>{
    var selected = document.querySelectorAll('input[name=type]:checked');
    if (selected[0].value === 'immediate'){
      immediateRender();
    }else{
      retainedRender();
    }
  };
};
