function setup(){
    canvas=createCanvas(550,550);
    canvas.position(560,150);
    video=createCapture(VIDEO);
    video.size(550,500);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses); 
    }
    
    function draw(){
        background("purple");
        textSize()
        fill()
        text('Ahmad',50,200)
    }
    
    function modelLoaded(){
        console.log("Posenet Is intialized go do whatever");
    }
    
    function gotPoses(results){
        if(results.length>0){
            console.log(results);
            poses = results;
            
              leftWristX = poses[0].pose.keypoints[9].position.x;
              rightWristX = poses[0].pose.keypoints[10].position.x;
            }
        }
