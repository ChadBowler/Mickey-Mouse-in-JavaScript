let canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c=canvas.getContext('2d');

/* c.beginPath();
c.moveTo(900, 0);
c.lineTo(900, 0);
c.lineTo(900, 1000);
c.strokeStyle = "black";
c.stroke();

c.beginPath();
c.moveTo(0, 500);
c.lineTo(0, 500);
c.lineTo(2000, 500);
c.strokeStyle = "black";
c.stroke(); */
const randomColor = Math.floor(Math.random()*16777215).toString(16);

//mickey mouse 
function drawMickey(x, y, radius){
    
    

    this.x = x;
    this.y = y;
    this.radius = radius;

    //head and ears
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI *2, false);
    c.strokeStyle = "black";
    c.stroke();
    c.fillStyle = "black";
    c.fill();

    c.beginPath();
    c.arc(this.x + this.radius, this.y - this.radius, this.radius * 0.55, 0, Math.PI *2, false);
    c.strokeStyle = "black";
    c.stroke();
    c.fillStyle = "black";
    c.fill();

    c.beginPath();
    c.arc(this.x - this.radius, this.y - this.radius, this.radius * 0.55, 0, Math.PI *2, false);
    c.strokeStyle = "black";
    c.stroke();
    c.fillStyle = "black";
    c.fill();

    //face
    c.beginPath();
    c.ellipse(this.x * 1.02, this.y * 1.1, this.radius * 0.8, this.radius * 0.5, Math.PI * 0.92, 0, Math.PI *2, false);
    c.strokeStyle = "black";
    c.lineWidth = 4;
    c.stroke();
    c.fillStyle = "#FAC499";
    c.fill();

    c.beginPath();
    c.ellipse(this.x * 0.98, this.y * 1.1, this.radius * 0.8, this.radius * 0.5, Math.PI * 1.08, 0, Math.PI *2, false);
    c.strokeStyle = "#black";
    c.lineWidth = 4;
    c.stroke();
    c.fillStyle = "#FAC499";
    c.fill();

    c.beginPath();
    c.ellipse(this.x * 0.99, this.y * 1.095, this.radius * 0.8, this.radius * 0.5, Math.PI * 1.08, 0, Math.PI *2, false);
    c.strokeStyle = "#FAC499";
    c.stroke();
    c.fillStyle = "#FAC499";
    c.fill();

    c.beginPath();
    c.ellipse(this.x * 0.97, this.y * 0.95, this.radius * 0.4, this.radius * 0.7, Math.PI, 0, Math.PI *2, false);
    c.strokeStyle = "#FAC499";
    c.stroke();
    c.fillStyle = "#FAC499";
    c.fill();

    c.beginPath();
    c.ellipse(this.x * 1.03, this.y * 0.95, this.radius * 0.4, this.radius * 0.7, Math.PI, 0, Math.PI *2, false);
    c.strokeStyle = "#FAC499";
    c.stroke();
    c.fillStyle = "#FAC499";
    c.fill();

    //eyes
    c.beginPath();
    c.ellipse(this.x * 1.02, this.y * 0.93, this.radius * 0.14, this.radius * 0.31, Math.PI, 0, Math.PI *2, false);
    c.strokeStyle = "black";
    c.lineWidth = 3;
    c.stroke();
    c.fillStyle = "white";
    c.fill();

    c.beginPath();
    c.ellipse(this.x * 0.98, this.y * 0.93, this.radius * 0.14, this.radius * 0.31, Math.PI, 0, Math.PI *2, false);
    c.strokeStyle = "black";
    c.lineWidth = 3;
    c.stroke();
    c.fillStyle = "white";
    c.fill();

    c.beginPath();
    c.ellipse(this.x * 1.015, this.y * 0.97, this.radius * 0.05, this.radius * 0.13, Math.PI, 0, Math.PI *2, false);
    c.strokeStyle = "black";
    c.lineWidth = 3;
    c.stroke();
    c.fillStyle = "black";
    c.fill();

    c.beginPath();
    c.ellipse(this.x * 0.985, this.y * 0.97, this.radius * 0.05, this.radius * 0.13, Math.PI, 0, Math.PI *2, false);
    c.strokeStyle = "black";
    c.lineWidth = 3;
    c.stroke();
    c.fillStyle = "black";
    c.fill();

    //smile
    /* c.beginPath();
    c.ellipse(this.x, this.y * 1.08, this.radius * 0.6, this.radius * 0.25, Math.PI, 0, Math.PI, true);
    c.strokeStyle = "black";
    c.stroke(); */

    

    let start = { x: this.x * 0.93, y: this.y * 1.065 };
    let cp1 = { x: this.x * 1.01, y: this.y * 1.27 };
    let cp2 = { x: this.x * 1.09, y: this.y * 1.02 };
    let end = { x: this.x * 1.07, y: this.y * 1.065 };

    // Cubic Bézier curve

    c.beginPath();
    c.moveTo(start.x * 1.0225, start.y * 1.07);
    c.bezierCurveTo(cp1.x * 0.98, cp1.y * 1.03, cp2.x * 0.94, cp2.y * 1.2, end.x * 0.98, end.y * 1.0725);
    c.strokeStyle = "black";
    c.lineWidth = 4;
    c.stroke();
    c.fillStyle = "#FAC499";
    c.fill();

    c.beginPath();
    c.moveTo(start.x * 1.0225, start.y * 1.04);
    c.bezierCurveTo(cp1.x * 0.98, cp1.y * 1.03, cp2.x * 0.94, cp2.y * 1.2, end.x * 0.98, end.y * 1.0425);
    c.lineWidth = 4;
    c.stroke();
    c.fillStyle = "black";
    c.fill();

    c.beginPath();
    c.moveTo(start.x, start.y);
    c.bezierCurveTo(cp1.x, cp1.y, cp2.x, cp2.y, end.x, end.y);
    c.strokeStyle = "black";
    c.lineWidth = 4;
    c.stroke();
    c.fillStyle = "#FAC499";
    c.fill();

    /* c.beginPath();
    c.ellipse(this.x * 0.938, this.y * 1.088, this.radius * 0.12, this.radius * 0.07, Math.PI * 0.8, 0, Math.PI, false);
    c.strokeStyle = "black";
    c.stroke();

    c.beginPath();
    c.ellipse(this.x * 1.062, this.y * 1.088, this.radius * 0.12, this.radius * 0.07, Math.PI * 1.2, 0, Math.PI, false);
    c.strokeStyle = "black";
    c.stroke(); */

    /* c.beginPath();
    c.moveTo(start.x * 1.038, start.y * 0.955);
    c.bezierCurveTo(cp1.x * 0.945, cp1.y * 0.8, cp2.x * 0.92, cp2.y * 0.94, end.x * 0.965, end.y * 0.955);
    c.lineWidth = 2;
    c.stroke(); */

    c.beginPath();
    c.moveTo(start.x * 1.038, start.y * 0.955);
    c.bezierCurveTo(cp1.x * 0.945, cp1.y * 0.8, cp2.x * 0.92, cp2.y * 0.94, end.x * 0.965, end.y * 0.955);
    c.lineWidth = 2;
    c.stroke();

    //tongue
    c.beginPath();
    c.ellipse(this.x, this.y * 1.19, this.radius * 0.2, this.radius * 0.125, Math.PI, 0, Math.PI *2, false);
    c.strokeStyle = "black";
    c.stroke();
    c.fillStyle = "#E6685D";
    c.fill();

    c.beginPath();
    c.ellipse(this.x * 1.01, this.y * 1.18, this.radius * 0.12, this.radius * 0.08, Math.PI * 0.9, 0, Math.PI, false);
    c.strokeStyle = "black";
    c.stroke();

    //dimples

    c.beginPath();
    c.ellipse(this.x * 0.933, this.y * 1.072, this.radius * 0.12, this.radius * 0.07, Math.PI * 0.8, 0, Math.PI, false);
    c.strokeStyle = "black";
    c.stroke();

    c.beginPath();
    c.ellipse(this.x * 1.07, this.y * 1.068, this.radius * 0.12, this.radius * 0.07, Math.PI * 1.2, 0, Math.PI, false);
    c.strokeStyle = "black";
    c.stroke();

    /* c.beginPath();
    c.moveTo(start.x * 1.16, start.y * 1.005);
    c.bezierCurveTo(cp1.x * 1.115, cp1.y * 0.875, cp2.x * 0.945, cp2.y * 0.945, end.x * 0.998, end.y * 0.985);
    c.lineWidth = 2;
    c.stroke();

    c.beginPath();
    c.moveTo(start.x * 1.038, start.y * 0.955);
    c.bezierCurveTo(cp1.x * 0.945, cp1.y * 0.8, cp2.x * 0.92, cp2.y * 0.94, end.x * 0.965, end.y * 0.955);
    c.lineWidth = 2;
    c.stroke(); */

    //nose
    c.beginPath();
    c.ellipse(this.x, this.y * 1.05, this.radius * 0.3, this.radius * 0.175, Math.PI, 0, Math.PI *2, false);
    c.strokeStyle = "black";
    c.stroke();
    c.fillStyle = "black";
    c.fill();

    c.beginPath();
    c.moveTo(start.x * 1.038, start.y * 0.955);
    c.bezierCurveTo(cp1.x * 0.945, cp1.y * 0.8, cp2.x * 0.92, cp2.y * 0.94, end.x * 0.965, end.y * 0.955);
    c.strokeStyle = "black";
    c.lineWidth = 1;
    c.stroke();

    /* c.beginPath();
    c.ellipse(this.x, this.y, this.radius * 0.3, this.radius * 0.12, Math.PI, 0, Math.PI, false);
    c.strokeStyle = "black";
    c.stroke(); */


    /* c.beginPath();
    c.moveTo(100, 100);
    c.bezierCurveTo(150, 40, 250, 300, 300, 450);

    c.stroke(); */
}


/* function drawLine(x){
    
    
    for(let i = 0; i < 300; i++) {
        penStroke(i);
    }
    function penStroke(i) {
        setTimeout(function(){
            c.beginPath();
            c.moveTo(x, i+300);
            //c.lineTo(x, i+300);
            c.lineTo(x, i + 301);
            c.strokeStyle = "#" + randomColor;
            c.lineWidth = 5;
            c.stroke();
        }, 10 * i);
    }
}  
function drawCircle(){
    for(let i = 0; i < 100; i++){
        circleStroke(i);
        
    }
    function circleStroke(i) {
        setTimeout(function(){
            c.beginPath();
            c.moveTo((innerWidth / 2) + i, (innerHeight / 4) + i);
            c.lineTo(((innerWidth / 2) + 1) + i, ((innerHeight / 4) + 1) + i);
            c.strokeStyle = "black";
            c.lineWidth = 3;
            c.stroke();
            console.log(i);
        }, 10 * i)
    }
    
} */



function animate() {
    requestAnimationFrame(animate); 
    
    
    

    
    
    //c.clearRect(0, 0, innerWidth, innerHeight);
    
    
    
   

}
//cool fill effect
/* for(let i = 0; i < innerHeight; i++){
    stylus(i);
}
function stylus(i) {
    setTimeout(function(){
        c.beginPath();
        c.moveTo(0, 0);
        c.lineTo(innerWidth, i);
        c.strokeStyle = "#" + randomColor;
        c.lineWidth = 1;
        c.stroke();
    }, 5 * i);
}

for(let p = innerHeight; p > 0; p--){
    
    stylusSecond(p);
}
function stylusSecond(p) {
    setTimeout(function(){
        c.beginPath();
        c.moveTo(innerWidth, innerHeight);
        c.lineTo(0, innerHeight- p);
        c.strokeStyle = "#" + randomColor;
        c.lineWidth = 1;
        c.stroke();
        console.log(p);
    }, 5 * p);
} */
//drawCircle();
/* c.beginPath();
    c.arc(900, 450, 50, 0, Math.PI *2, false);
    c.strokeStyle = "black";
    c.stroke();
 */

 for (let i = 0; i < 1; i++) {

    let radius = Math.random() * 20 + 20;
    let x = Math.random() * (innerWidth - radius * 2) + radius;
    let y = Math.random() * (innerHeight - radius * 2) + radius;

    
    
}

drawMickey(900, 450, 100);


/* let start = { x: 50, y: 100 };
let cp1 = { x: 30, y: 90 };
let cp2 = { x: 150, y: 275 };
let end = { x: 250, y: 100 };

// Cubic Bézier curve
c.beginPath();
c.moveTo(start.x, start.y);
c.bezierCurveTo(cp1.x, cp1.y, cp2.x, cp2.y, end.x, end.y);
c.stroke();

// Start and end points
c.fillStyle = "blue";
c.beginPath();
c.arc(start.x, start.y, 5, 0, 2 * Math.PI); // Start point
c.arc(end.x, end.y, 5, 0, 2 * Math.PI); // End point
c.fill();

// Control points
c.fillStyle = "red";
c.beginPath();
c.arc(cp1.x, cp1.y, 5, 0, 2 * Math.PI); // Control point one
c.arc(cp2.x, cp2.y, 5, 0, 2 * Math.PI); // Control point two
c.fill(); */
/*
for(let i = 0; i < 5; i++){
    let x = Math.random() * innerWidth;
    drawLine(x);
} */
animate();
