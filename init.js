'use strict';

function update(name) {
	recalc(name);
	redraw();
}

document.addEventListener('DOMContentLoaded', function () {
	for (const name in inputs) {
		const xInput = document.getElementById(`${name}-x-input`);
		const yInput = document.getElementById(`${name}-y-input`);

		function takeFocus() {
			update(name);
		}

		xInput.addEventListener('change', takeFocus);
		yInput.addEventListener('change', takeFocus);

		inputs[name] = {
			get x() {
				return xInput.valueAsNumber;
			},

			get y() {
				return yInput.valueAsNumber;
			},

			set x(v) {
				xInput.valueAsNumber = v;
			},

			set y(v) {
				yInput.valueAsNumber = v;
			}
		};
	}

	for (const name in consts) {
		if ('get' in Object.getOwnPropertyDescriptor(consts, name)) {
			continue;
		}

		const input = document.getElementById(`${name}-const`);

		if (input === null) {
			console.log(name);
		}

		Object.defineProperty(consts, name, {
			get() {
				return input.valueAsNumber;
			}
		});
	}

	for (const name in graphs) {
		graphs[name] = document.getElementById(`${name}-graphic`).getContext('2d');
	}

	graphs.image.canvas.addEventListener('click', function (e) {
		inputs.imgCoords.x = e.offsetX;
		inputs.imgCoords.y = e.offsetY;
		update('imgCoords');
	});

	update('camRay');
});
