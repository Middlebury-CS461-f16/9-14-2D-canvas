

const NUM_POINTS = 10000;
const SIZE = 2;

let immediateRender = function(){
  // get the drawing context
    let canvas = document.getElementById('canvas');
    let context = canvas.getContext("2d");
    let width = canvas.width;
    let height = canvas.height;

    context.clearRect(0 , 0, width, height);
    // set the paint color
    context.fillStyle = "#000000";

    // pick three initial points
    let points = [[width/2,0], [0, height - 10], [height-10, height - 10]];

    // pick on of the three at random as a starting point
    let point = points[Math.floor(Math.random() * 3)];

    for (let i = 0; i < NUM_POINTS; i++){
        // pick one of the initial three points at random
        let randomPoint = points[Math.floor(Math.random() * 3)];
        // find the mid point between the random point and the last point drawn
        point = [(point[0] + randomPoint[0]) / 2, (point[1] + randomPoint[1]) / 2 ];

        // draw the new point
        context.fillRect(point[0], point[1],SIZE, SIZE);
    }
};


let retainedRender = function(){

};






window.onload = function(){
  let button = document.getElementById("renderButton");
  button.onclick = ()=>{
    var selected = document.querySelectorAll('input[name=type]:checked');
    if (selected[0].value === 'immediate'){
      immediateRender();
    }else{
      retainedRender();
    }
  };
};
