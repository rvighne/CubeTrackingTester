'use strict';

const inputs = {
	imgCoords: null,
	camRay: null,
	floorPos: null
};

const consts = {
	imgWidth: null,
	imgHeight: null,
	focalLen: null,
	inclAngle: null,
	camHeight: null,

	get centerX() {
		return (this.imgWidth - 1) / 2;
	},

	get centerY() {
		return (this.imgHeight - 1) / 2;
	}
};

function d2r(d) {
	return d * Math.PI / 180.0;
}

function r2d(r) {
	return r * 180.0 / Math.PI;
}

function recalc(name) {
	if (name === 'imgCoords') {
		inputs.camRay.x = r2d(Math.atan2(inputs.imgCoords.x - consts.centerX, consts.focalLen));
		inputs.camRay.y = -r2d(Math.atan2(inputs.imgCoords.y - consts.centerY, consts.focalLen));
	} else if (name === 'floorPos') {
		inputs.camRay.x = r2d(Math.atan2(inputs.floorPos.y, consts.camHeight));
		inputs.camRay.y = 0;

		alert("Unimplemented feature!");
	}

	if (name !== 'imgCoords') {
		inputs.imgCoords.x = consts.centerX + Math.tan(d2r(inputs.camRay.x)) * consts.focalLen;
		inputs.imgCoords.y = consts.centerY - Math.tan(d2r(inputs.camRay.y)) * consts.focalLen;
	}

	if (name !== 'floorPos') {
		const floorAngle = d2r(inputs.camRay.y + consts.inclAngle);
		inputs.floorPos.y = Math.tan(floorAngle) * consts.camHeight;
		inputs.floorPos.x = Math.tan(d2r(inputs.camRay.x)) * Math.cos(d2r(inputs.camRay.y)) * (consts.camHeight / Math.cos(floorAngle));
	}
}
