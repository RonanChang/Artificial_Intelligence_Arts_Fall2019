let mobilenet;
let img;

let label;
let probability;
function setup() {
  createCanvas(900, 600);
  background(0);
  img = createImg("images/default.jpg", imageReady);
  img.hide();
  mobilenet = ml5.imageClassifier("MobileNet", modelReady);
}

function modelReady() {
  //model is actually loaded from the cloud.
  //so you have to be online
  console.log("Model is ready!");
  mobilenet.predict(img, gotResults);
}

function imageReady() {
  image(img, 0, 0, width, height);
}

function gotResults(err, result) {
  if (err) {
    console.error(err);
  } else {
    console.log(result);
    label = result[0].className;
    fill(0);
    textSize(64);
    text(label, 10, 100); // text(string, xpos,ypos)
    probability = result[0].probability;
    createP(label);
    createP(probability); //create a <p> in html
  }
}
