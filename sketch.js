var canavs;
var database;

var drawing = []

function setup() {
    canvas = createCanvas(400, 400);
    canvas.parent('canvascontainer');
    database = firebase.database()
    background(51)
    var clearbutton = select('#clearbutton');

    clearbutton.mousePressed(clearDrawing)
    form = new Form();
}

var db_drawing = []

function mouseDragged() {
    form.hide();
    var point = {
        x: mouseX,
        y: mouseY
    }
    drawing.push(point);
    var drawingRef = database.ref('drawing')
    drawingRef.set({
        "d": drawing
    })
}

function draw() {
    background("#add8e6");
    readData()
    beginShape();
    stroke(255);
    strokeWeight(4);
    noFill();
    for (var i = 0; i < db_drawing.length; i++) {
        vertex(db_drawing[i].x, db_drawing[i].y);
        endShape();
    }
    form.display();

}

function readData() {
    database.ref('drawing/').on('value', (data) => {
        db_drawing = data.val().d
    })
}

function clearDrawing() {
    db_drawing = []
    var drawingRef = database.ref('drawing')
    drawingRef.set({
        "d": []
    })
}