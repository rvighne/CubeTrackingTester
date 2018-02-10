'use strict';

const graphs = {
	image: null,
	robot: null,
	aerial: null
};

const cubeSize = 20;

function drawImage(ctx) {
	ctx.canvas.width = consts.imgWidth;
	ctx.canvas.height = consts.imgHeight;

	ctx.strokeStyle = 'red';

	ctx.beginPath();
	ctx.moveTo(consts.centerX, 0);
	ctx.lineTo(consts.centerX, consts.imgHeight);
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(0, consts.centerY);
	ctx.lineTo(consts.imgWidth, consts.centerY);
	ctx.stroke();

	ctx.fillStyle = 'lime';
	ctx.fillRect(inputs.imgCoords.x - cubeSize / 2, inputs.imgCoords.y - cubeSize / 2, cubeSize, cubeSize);
}

function drawRobot(ctx) {
	ctx.fillText("Unimplemented", 20, 20);
}

function drawAerial(ctx) {
	ctx.fillText("Unimplemented", 20, 20);
}

function redraw() {
	for (const graph of Object.values(graphs)) {
		graph.clearRect(0, 0, graph.canvas.width, graph.canvas.height);
	}

	drawImage(graphs.image);
	drawRobot(graphs.robot);
	drawAerial(graphs.aerial);
}
