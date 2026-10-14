function gradientFilter() {
  let startColor = color(232,237,231);
  let endColor = color(211,206,207);
  for (let y = 0; y < 784.31; y += 1) {
    let amt = map(y, 0, 784.31, 0, 1);
    let gradColor = lerpColor(startColor, endColor, amt);
    stroke(gradColor);
    line(0, y, width, y);
  }
}//Color Gradients(degradê de cores) - https://p5js.org/tutorials/color-gradients/

async function setup() {
  createCanvas(800, 784.31);
  gradientFilter();
  img = await loadImage('textura1.jpg');//https://p5js.org/reference/p5/texture/
  noLoop();
}

function draw() {
  stroke(20);//cor da linha
  strokeWeight(15);//espessura da linha
  line(0,319.5,800,319.5);//posição da linha
  //primeira horizontal

  stroke(20); 
  strokeWeight(15); 
  line(0,509.5,800,509.5); 
  //segunda horizontal 

  stroke(20);  
  strokeWeight(10);
  line(363,749.5,614,749.5);
  //terceira horizontal

  stroke(20);  
  strokeWeight(10);
  line(80,517,77,784.31);
  //primeira vertical

  stroke(20);  
  strokeWeight(10);
  line(367.5,0,363,784.31);
  //segunda vertical

  stroke(20);  
  strokeWeight(10);
  line(614,517,614,784.31);
  //terceira vertical

  fill(231,6,3);//cor
  strokeWeight(0);
  quad(0,0,363,0,363,312,0,312);
  //quadrado vermelho

  fill(249,203,2);
  strokeWeight(0);
  quad(0,517,75,517,75,784.31,0,784.31);
  //quadrado amarelo

  fill(26,26,105);
  strokeWeight(0);
  quad(369,517,609,517,609,745,368,745);
  //quadrado azul 

  blendMode(MULTIPLY);//https://p5js.org/reference/p5/blendMode/
  tint(255, 90); // transparência da textura: 0 = invisível, 255 = total
  image(img, 0, 0, width, height);
  noTint();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}