let color = 'green';

function setup()
{
	createCanvas(800,600);
	frameRate(144);
}

function draw()
{
	background('black');
	fill(color);
	ellipse(mouseX, mouseY, 30, 30);
}

function mousePressed() {
	if (color == 'green') color = 'blue';
	else color = 'green';
}